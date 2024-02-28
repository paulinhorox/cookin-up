export function ItensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    return lista1.every((ItemLista1) => lista2.includes(ItemLista1))

}