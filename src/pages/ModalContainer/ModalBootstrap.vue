<template>
  <div class="custom-modal">
    <div class="body">
      <div class="">
        Lorem ipsum dolor sit {{ text }} consectetur adipisicing elit. Quasi voluptas soluta expedita quia veritatis! Rem earum quo quod ea est.
      </div>
      <div class="">
        <button @click="toggle" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalBootstrap',
  props: ['show', 'text', 'toggle'],
}
</script>

<style lang="scss" scoped>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  .body {
    width: 640px;
    min-height: 320px;
    background: white;
    padding: 32px;
    transition: 0.25s;
  }
}
</style>
