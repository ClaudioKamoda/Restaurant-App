<template>
  <div class="modal" v-if="show">
    <div class="modal--content">
      <div class="modal--close" v-html="closeIcon" @click="onCloseModalClick"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import feather from 'feather-icons'

export default{
  name: 'Modal',
  props:{
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    closeIcon() {
			return feather.icons.x.toSvg()
		}
  },
  methods:{
    onCloseModalClick(){
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);

  &--content{
    background: white;
    border-radius: 8px;
    width: 600px;
    padding: 30px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  &--close{
    text-align: right;
  }
}
</style>