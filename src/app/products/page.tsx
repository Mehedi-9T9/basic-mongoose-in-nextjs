
import ProductCard from '@/Components/ProductCard';
import products from '@/lib/getData/getAllProduct';

type productDemo = {
    productName: string,
    category: string,
    price: string,
    ram: string,
    room: string,
    madeIn: string,
    _id: string,
    productId: string
}
const productPage = async () => {
    const allProducts = await products()
    return (
        <div className='grid grid-cols-4 gap-5 py-5'>

            {
                allProducts.map((product: productDemo) => <ProductCard key={product._id} product={product}></ProductCard>

                )
            }

        </div>
    );
};

export default productPage;