const BtnContainer = ({ jobs, jobShow }) => {
	return (
		<div className="btn-container">
			{jobs.map((item) => {
				return (
					<button
						key={item.id}
						className="job-btn"
						onClick={() => {
							jobShow(item.order);
						}}
					>
						{item.company}
					</button>
				);
			})}
		</div>
	);
};
export default BtnContainer;
