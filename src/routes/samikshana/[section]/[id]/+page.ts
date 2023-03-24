import supabase  from '$lib/db'

export async function load({params}:{params: { id:number }}){
	const { data, error } = await supabase
	.from('brhat-samikshana')
	.select()
	.eq('type','section')
	.eq('id',`${params.id}`)
	.order('id')
	.single()
	if (error) throw new Error(error.message)
	return data	

}