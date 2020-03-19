var template = `
    <div v-if="movie" class="data-container">
        <h1>{{movie.name}}电影详情</h1>
        <p>
        <strong>英文名</strong>
        <span>{{movie.ename}}</span>
        <p>
        <strong>票房</strong>
        <span>{{movie.count}}</span>
        <h2>导演</h2>
        <ul>
            <li v-for="item in movie.director" :key="item._id">
                <img :src="item.image" alt="" />
                <strong>{{item.name}}</strong>
            </li>
        </ul>
    </div>
`;

export default {
  template,
  props: ["movie"]
};
