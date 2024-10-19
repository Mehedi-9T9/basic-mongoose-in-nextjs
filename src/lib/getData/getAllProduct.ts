
const products = async () => {
    const data = await fetch("http://localhost:3000/api/product", {
        next: { revalidate: 10 }
    })
    return data.json()
};

export default products;