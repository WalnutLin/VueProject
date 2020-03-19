var template = `
    <div class="pager" v-if="total>0">
        <a @click.prevent="handleAClick(1)" href="" class="pager-item" :class="current===1?'disabled':''">首页</a>
        <a @click.prevent="handleAClick(current-1)" href="" class="pager-item" :class="current===1?'disabled':''">上一页</a>
        <span>
            <i>{{current}}</i>
            /
            <i>{{pageNumber}}</i>
        </span>
        <a @click.prevent="handleAClick(current+1)" href="" class="pager-item" :class="current===pageNumber?'disabled':''">下一页</a>
        <a @click.prevent="handleAClick(pageNumber)" href="" class="pager-item" :class="current===pageNumber?'disabled':''">尾页</a>
    </div>
`;

export default {
  template,
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleAClick(newpage) {
      if (newpage < 1 || newpage > this.pageNumber || newpage == this.current) {
        return;
      }
      this.$emit("page-change", newpage);
    }
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    }
  }
};
