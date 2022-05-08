import React from 'react'
import { Link } from 'react-router-dom'
import bannerSaleData from '../assets/fake-data/banner-sale'
import bannerSliderData from '../assets/fake-data/banner-slider'
import heroSliderData from '../assets/fake-data/hero-slider'
import productData from '../assets/fake-data/products'
import BannerSale from '../components/BannerSale'
import BannerSlider from '../components/BannerSlider'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import ProductNewSlider from '../components/ProductNewSlider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCart from '../components/ProductCart'
import InformationBg from '../components/InformationBg'
import InformationContent from '../components/InformationContent'
import SearchBarMobile from '../components/SearchBarMobile'


const Home = () => {
	return (
		<Helmet title="Trang chủ">
			{/* {section SearchBarMobile} */}
			<Section>
				<SectionBody>
					<SearchBarMobile/>
				</SectionBody>
			</Section>
			{/* {end section SearchBarMobile} */}
			{/* {section BannerSlider} */}
			<Section>
				<SectionBody>
					<BannerSlider data={bannerSliderData}/>
				</SectionBody>
			</Section>
			{/* {end section BannerSlider} */}
			{/* {section HeroSlider} */}
			<Section>
				<SectionBody>
					<HeroSlider data={heroSliderData}/>
				</SectionBody>
			</Section>
			{/* { end section HeroSlider} */}
			{/* {  section ProductNewSlider} */}
			<Section>
				<div className="container">
					<SectionTitle>
						Sản phẩm mới
					</SectionTitle>
					<SectionBody>
						<ProductNewSlider productData={productData}/>
					</SectionBody>
				</div>
			</Section>
			{/* {end  section ProductNewSlider} */}
			{/* {section BannerSale} */}
			<Section>
				<SectionBody>
				<Grid
                        col={3}
                        mdCol={3}
                        smCol={1}
                        gap={0}
                    >
                        {
                            bannerSaleData.map((item, index) => <Link key={index} to="/catalog">
                                <BannerSale
									title={item.title}
                                    desc={item.desc}
                                    subtitle={item.subtitle}
									img={item.img}
                                />
                            </Link>)
                        }
                    </Grid>
				</SectionBody>
			</Section>
			{/* {end section BannerSale} */}
			{/* {  section product new} */}
			<Section>
				<div className="container">
					<SectionTitle>
						Sản phẩm mới
					</SectionTitle>
					<SectionBody>
						<Grid
							col={5}
							mdCol={5}
							smCol={2}
							gap={15}
						>
							{productData.getProducts(10).map((item,index) => (
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
							))}
						</Grid>
					</SectionBody>
				</div>
			</Section>
			{/* {end  section product new} */}
			{/* {section Information} */}
			<Section>
				<SectionBody>
				<Grid
                        col={2}
                        mdCol={2}
                        smCol={1}
                        gap={0}
                    >
                        <InformationBg/>
                        <InformationContent/>
                    </Grid>
				</SectionBody>
			</Section>
			{/* {end section Information} */}
		</Helmet>
	)
}

export default Home