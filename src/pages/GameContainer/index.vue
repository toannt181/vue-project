<template>
  <div>
    <Header :title="gameData.title" :meta="gameData.meta" :src="gameData.img" trending="" :nav="true" />
    <div class="container text-center">
      <h1 class="title">
        POINT:
        <template v-if="gameMaterial">
          {{ point }} / {{ index + 1 }}
        </template>
      </h1>
      <template v-if="!playing">
        <div class="list-item" v-if="gameMaterial">
          <img class="item" v-for="(item, i) in gameMaterial.sequence" :key="i" :src="item">
        </div>
      </template>
      <div v-else-if="!isFinish">
        <div class="question">
          <div
            :class="{
              item: true,
              active: i === selectedAnswer,
              [answer.type]: showResult,
            }"
            v-for="(answer, i) in question"
            :key="i"
            @click="selectAnswer(i)"
          >
            <img :src="answer.src">
          </div>
        </div>
      </div>
      <div v-else>
        CONGRAGULATION!!!
      </div>
      <button
        class="play-button"
        @click="update"
        :disabled="playing && selectedAnswer === null"
      >
        PLAY
      </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { mapState, mapActions } from 'vuex'
import { find, shuffle } from 'lodash'

export default {
  name: 'GameContainer',
  components: { Header },
  data() {
    return {
      playing: false,
      question: [],
      index: -1,
      selectedAnswer: false,
      showResult: false,
      point: 0,
      isFinish: false,
    }
  },
  computed: {
    ...mapState({
      gameData(state) {
        const { id } = this.$route.params
        const gameData = find(state.home.games, { id: Number(id) })
        if (!gameData) {
          this.$router.replace('/')
          return {}
        }

        return gameData
      },
      gameMaterial(state) {
        return state.game.content
      },
    }),
  },
  methods: {
    ...mapActions({ fetchGameContent: 'game/fetchGameContent' }),
    update() {
      if (!this.playing) {
        this.playing = true
        this.nextQuestion()
        return
      }
      if (!this.showResult) {
        this.showResult = true
        if (this.question[this.selectedAnswer].type === 'correct') this.point++
        setTimeout(this.nextQuestion, 1000)
      }
    },
    nextQuestion() {
      const { sequence } = this.gameMaterial
      this.selectedAnswer = null
      this.showResult = false
      this.index++
      if (this.index + 1 > sequence.length) {
        this.finish()
        return
      }
      const shuffeAnswer = shuffle(
        sequence.filter((_, index) => index !== this.index)
      )
      const wrongAnswer = [shuffeAnswer[0], shuffeAnswer[1]]
      const correctAnswer = { src: sequence[this.index], type: 'correct' }
      const question = [
        ...wrongAnswer.map(src => ({ src, type: 'wrong' })),
        correctAnswer,
      ]
      this.question = shuffle(question)
    },
    selectAnswer(index) {
      if (this.showResult) return
      this.selectedAnswer = index
    },
    finish() {
      this.isFinish = true
    },
  },
  created() {
    const { id } = this.$route.params
    this.fetchGameContent(id)
  },
}
</script>

<style lang="scss" scoped>
.list-item {
  overflow: scroll;
  display: flex;
  .item {
    display: inline-block;
    margin-right: 16px;
    height: 400px;
  }
}

.question {
  display: flex;
  justify-content: center;
  .item {
    flex: 0 0 180px;
    margin-right: 32px;
    overflow: hidden;
    height: 400px;
    transition: 0.25s;
    opacity: 0.5;
    position: relative;
    img {
      height: 100%;
      transform: translateX(-25%);
    }
    &.active {
      opacity: 1;
      border-bottom: 20px solid palevioletred;
    }
    &.correct::after,
    &.wrong::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0.8;
    }
    &.wrong::after {
      background: red;
    }
    &.correct::after {
      background: green;
    }
  }
}

.title {
  text-align: center;
  font-size: 60px;
  margin: 40px;
}

.play-button {
  padding: 8px 150px;
  border: none;
  border-radius: 16px;
  background: turquoise;
  font-size: 32px;
  color: whitesmoke;
  margin: 40px;
  &:disabled {
    background: grey;
    cursor: not-allowed;
  }
}
</style>
