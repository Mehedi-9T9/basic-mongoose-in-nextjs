
const product = async (id: string) => {


    const data = await fetch(`http://localhost:3000/api/singleProduct?id=${id}`, {
        next: { revalidate: 10 }
    })
    return data.json()
}
export default product