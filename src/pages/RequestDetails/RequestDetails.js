import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { useWeb3React } from '@web3-react/core';
import { mainContext } from '../../state';
import { convertToBiobit } from '../../utils';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Guide from './../../components/Guide/Guide';

const steps = [
	{
		selector: '[data-tour="request-details-one"]',
		content: 'Mage’s public key on Ethereum Network is indicated here for checking by angles.',
	},
	{
		selector: '[data-tour="request-details-two"]',
		content: 'Mage creates the Zpaper, containing all the description and requirements.',
	},
	{
		selector: '[data-tour="request-details-three"]',
		content: 'For contributing, files must be selected here from your device.',
	},
	{
		selector: '',
		content:
			'Well done! You earn 100 BBits for this learning! want to earn more? learn every guide on pages and collect about 500 BBits!',
	},
];

const RequestDetailsPage = () => {
	const { id } = useParams();
	const [request, setRequest] = useState({});
	const { appState } = useContext(mainContext);
	const [showDialog, setDialog] = useState(false);
	const [error, setError] = useState(false);
	const { account } = useWeb3React();

	useEffect(() => {
		if (appState.contract !== null) {
			appState.contract.methods.Categories(id).call((error, result) => {
				if (!error) {
					let categories = result[0];
					let businessCategory = result[1];

					if (+businessCategory === +process.env.REACT_APP_ZARELA_BUSINESS_CATEGORY)
						// filter categories and only show Zarela requests
						appState.contract.methods.orders(id).call((error, result) => {
							if (!error) {
								const requestTemplate = {
									requestID: result[0],
									title: result[1],
									description: result[7],
									requesterAddress: result[2],
									angelTokenPay: convertToBiobit(result[3]),
									laboratoryTokenPay: convertToBiobit(result[4]),
									totalContributors: result[5], // total contributors required
									totalContributed: +result[5] - +result[8],
									whitePaper: result[6],
									timestamp: result[10],
									categories,
									encryptionPublicKey: result[11],
									totalContributedCount: result[9],
								};
								setRequest(requestTemplate);
							} else {
								console.error(error.message);
							}
						});
				} else {
					console.error(error.message);
				}
			});
		}
	}, [id, appState.contract]);

	return (
		<Guide steps={steps}>
			{appState.isMobile ? (
				<Mobile
					{...{
						account,
						showDialog,
						request,
						error,
						setDialog,
						setError,
					}}
				/>
			) : (
				<Desktop
					{...{
						account,
						showDialog,
						request,
						error,
						setDialog,
						setError,
					}}
				/>
			)}
		</Guide>
	);
};

export default RequestDetailsPage;
