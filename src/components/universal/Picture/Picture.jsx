import React from "react";

function Picture({ img, webp, ...rest }) {
	let imageExt = (img.slice(-7).split('.')[1]).trim();
	let type = 'image/' + imageExt;
	if (imageExt != 'png') {
		type = 'image/jpeg';
	}

	let alt = rest.alt ? rest.alt : 'image';

	return (
		<picture>
			{
				rest.imgMob ?
					<>
						<source
							srcSet={rest.webpMob}
							type='image/webp'
							media={`(max-width: ${rest.widthMob}px)`}
						/>
						<source
							srcSet={rest.imgMob}
							type={type}
							media={`(max-width: ${rest.widthMob}px)`}
						/>
					</> : ''
			}
			{
				rest.imgTab ?
					<>
						<source
							srcSet={rest.webpTab}
							type='image/webp'
							media={`(max-width: ${rest.widthTab}px)`}
						/>
						<source
							srcSet={rest.imgTab}
							type={type}
							media={`(max-width: ${rest.widthTab}px)`}
						/>
					</> : ''
			}
			<source srcSet={webp} type='image/webp' />
			{/* <source srcSet={img} type={type} /> */}
			<img className={rest.className} src={img} alt={alt}
				loading={rest.lazy ? 'lazy' : 'auto'} />
		</picture>
	)
}

export default Picture;