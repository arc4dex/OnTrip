import { Rating } from '@mui/material';
import { StyledCard, StyledPaper, StyledButton, StyledBox, ContainerRaitingAccommodation, MainSection } from './styles';

function AccommodationCard({ accom, reviewAccommodation }) {
	function readMore() {
		console.log('Button Read More clicked');
	}

	function booking() {
		console.log('Button Booking clicked');
	}

	const reviewRating = reviewAccommodation?.reduce((a,b)=>(a + b.review),0) / reviewAccommodation?.length

	return (
		<>
			<StyledCard>
				<div
					className="divImg"
					style={{
						backgroundImage: `url(${accom.imageUrl[0]})`,
						backgroundRepeat: 'no-repeat',
						width: '100%',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				>
					{accom.specialOffer?.status === true ? (
						<StyledPaper>
							<StyledBox>
								<h4>City</h4>
								<p>{accom?.location?.city}</p>
							</StyledBox>
							<StyledBox>
								<h4>Date</h4>
								<p>{accom?.specialOffer?.date}</p>
							</StyledBox>
							<StyledBox>
								<h4>Price</h4>
								<p>{`$ ${
									accom?.specialOffer === true
										? accom?.specialOffer.price
										: accom?.price
								}`}</p>
							</StyledBox>
						</StyledPaper>
					) : (
						<StyledPaper>
							<StyledBox>
								<h4>City</h4>
								<p>{accom?.location?.city}</p>
							</StyledBox>
							<StyledBox>
								<h4>Price</h4>
								<p>{`$ ${
									accom?.specialOffer === true
										? accom?.specialOffer.price
										: accom?.price
								}`}</p>
							</StyledBox>
						</StyledPaper>
					)}
				</div>
				<ContainerRaitingAccommodation>
          <Rating value={reviewRating} precision={0.5} size='small' readOnly/>
      </ContainerRaitingAccommodation>
				<h2>{accom?.name}</h2>
				<p>{accom?.description}</p>
				<div className="btn">
					<StyledButton variant="contained" onClick={() => readMore()}>
						Booking
					</StyledButton>
					<StyledButton variant="outlined" onClick={() => booking()}>
						Read More
					</StyledButton>
				</div>
			</StyledCard>
		</>
	);
}

export default AccommodationCard;
