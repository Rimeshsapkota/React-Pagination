
export default function Card(props) {
	return (
		<div className="container my-4">
			<div className="card" style={{ width: "18rem" }}>
				{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
				<div className="card-body">
					<h5 className="card-title">{ props.title.length > 20 ? props.title.slice(0, 20) + '...' : props.title}</h5>
					<p className="card-text">
						Bir Sardar is frontend developer.He works in many International as
						well as National Company.
					</p>
				</div>
			</div>

		</div>

	);
}
