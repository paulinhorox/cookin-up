import type { PropType } from 'vue';
import { obterReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceitas';

export default (await import('vue')).defineComponent({
props: {
ingredientes: { type: Array as PropType<string[]>, required: true }
},
data() {
return {
receitasEncontradas: [] as IReceita[]
};
},
async created() {
const receitas = await obterReceitas();

this.receitasEncontradas = receitas.filter((receita) => {
// Lógica que verifica se posso fazer receita
// Todos os ingredientes devem estar inclusos na minha lista de ingredientes
// Se sim, devemos retornar true
const possoFazerReceita = ItensDeLista1EstaoEmLista2(receita.ingredientes, this.ingredientes);

return possoFazerReceita;
});

},

components: { BotaoPrincipal, CardReceita },
emits: ['editarReceitas']
});
