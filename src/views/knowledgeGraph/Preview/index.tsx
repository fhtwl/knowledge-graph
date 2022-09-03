import { getData } from '@/api/knowledgeGraph';
import GraphChart from '@/components/GraphChart';
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
  setup() {
    onMounted((() => {
      getData().then(data => {
        const nodes = data.nodes.map(function (nodeName, idx) {
          return {
            name: nodeName,
            value: data.dependentsCount[idx]
          };
        });
        const edges = [];
        for (var i = 0; i < data.edges.length; ) {
          var s = data.edges[i++];
          var t = data.edges[i++];
          edges.push({
            source: s,
            target: t
          });
        }
        nodes.forEach(function (node) {
          // if (node.value > 100) {
          node.emphasis = {
            label: {
              show: true
            }
          };
          // }
          if (node.value > 5000) {
            node.label = {
              show: true
            };
          }
        });
        const graphChart = new GraphChart({
          el:'chart',
          // onClick,
          // onRightClick,
          linkVal: 40,
          // nodes: res.nodes.map(item => {
          //     return {
          //         ...item,
          //         isVisibility: true
          //     }
          // }),
          nodes: res.nodes,
          links: res.links,
          // isFlycenter: true
          isFlycenter: globalPage.getData('page') === 0
      })
      })
      
      

    // https://static.fhtwl.cc/demo/knowledge-graph/npmdep.json



    // https://www.npmjs.com/search?q=lodash
    }
  },
  render() {
    return <>dfsf</>;
  },
});
