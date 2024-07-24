import React from 'react'
import './TipsBlock.css'
import ButtonViewAll from '../ButtonViewAll/ButtonViewAll'
import { assets } from '../../assets/assets'

const TipsBlock = () => {
	return (
		// <div className='tips-main'>
		// 	<div className='tips-title'>
		// 		<h2>Our tips and advice</h2>
		// 		<ButtonViewAll />
		// 	</div>
		// 	<div className='tips-block'>
		// 		<img src={assets.tips1} alt='' />
		// 		<div className='tips-content'>
		// 			<div className='tips-content-title'>
		// 				<h3>Enjoy the atmosphere and unique flavors of our café.</h3>
		// 			</div>
		// 			<div className='tips-content-reviews'>
		// 				<p>
		// 					We take pride in our cozy setting and the variety of dishes on our
		// 					menu. Be sure to try our daily specials to discover new culinary
		// 					experiences.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>

		// </div>

		<section className='advice-tips'>
			<div className='container-tips'>
				<div className='flex-tips'>
					<div className='title-tips-32'>Our tips and advice</div>
					<ButtonViewAll />
				</div>

				<div className='advice-blocks-tips'>
					<img src={assets.tips1} alt='' />
					<div className='advice-block-tips'>
						<div className='title-tips-24'>
							Enjoy the atmosphere and unique flavors of our café.
						</div>
						<div className='title-tips-16'>
							We take pride in our cozy setting and the variety of dishes on our
							menu. Be sure to try our daily specials to discover new
							culinaryexperiences.
						</div>
					</div>
				</div>

                
			</div>
		</section>
	)
}

export default TipsBlock
