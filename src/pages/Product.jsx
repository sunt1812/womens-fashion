import React from 'react'
import { useParams } from 'react-router'
import productData from '../assets/fake-data/products'
import Breadcrumb from '../components/Breadcrumb'
import Helmet from '../components/Helmet'
import ProductCart from '../components/ProductCart'
import ProductView from '../components/ProductView'
import Section, { SectionBody,SectionTitle} from '../components/Section'
import Grid from '../components/Grid'

const Product = () => {
	const {slug} = useParams()
	const product = productData.getProductBySlug(slug)
	const relatedProducts = productData.getProducts(5)
	React.useEffect(() => {
		window.scrollTo(0,0)
	}, [product])
  	return (
		<Helmet title={product.title}>
			<Section>
				<SectionBody>
					<Breadcrumb title={product.title}/>
				</SectionBody>
			</Section>
			<div className="container">
				<Section>
					<SectionBody>
						<ProductView product={product}/>
					</SectionBody>
				</Section>
				<Section>
					<SectionTitle>
						SẢN PHẨM LIÊN QUAN
					</SectionTitle>
					<SectionBody>
						<Grid
							col={5}
							mdCol={2}
							smCol={1}
							gap={20}
						>
							{
								relatedProducts.map((item, index) => (
									<ProductCart
									key={index}
									img01={item.img01}
									img02={item.img02}
									title={item.title}
									price={Number(item.price)}
									subprice={Number(item.subprice)}
									slug={item.slug}
									id={item.id}
									/>
								))
							}
						</Grid>
					</SectionBody>
				</Section>
			</div>
		</Helmet>
  	)
}

export default Product