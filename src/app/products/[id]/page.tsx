
import product from "@/lib/getData/getProduct";



const detailsPage = async ({ params }: { params: { id: string } }) => {
    const singleProduct = await product(params.id)
    return (
        <div className='border p-5 rounded' key={product.productName}>
            <h2 className='text-2xl font-semibold text-center'>{singleProduct.productName}</h2>
            <div className='grid grid-cols-2 gap-4'>
                <p>Ram: {singleProduct.ram}</p>
                <p>Room: {singleProduct.room}</p>
                <p>Price: {singleProduct.price}</p>
                <p>{singleProduct.category}</p>
            </div>
            <h4 className='text-xl'>{singleProduct.madeIn}</h4>



        </div>
    );
};

export default detailsPage;