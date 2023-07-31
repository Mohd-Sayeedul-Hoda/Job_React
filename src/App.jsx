import { useEffect, useState } from 'react';
import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [jobIndex, setJobIndex] = useState(0);

	const jobShow = (index) => {
		setJobIndex(index - 1);
	};

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);
	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading"></div>
			</section>
		);
	}
	return (
		<section className="jobs-center">
			<BtnContainer
				jobs={jobs}
				jobShow={jobShow}
			/>
			<JobInfo
				jobs={jobs}
				jobIndex={jobIndex}
			/>
		</section>
	);
};
export default App;
