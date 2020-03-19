import Modal from "./Modal.js";

var template = `
    <Modal v-if="isShow">
        <div class="loading">加载中···</div>
    </Modal>
`;

export default {
  components: { Modal },
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  template
};
