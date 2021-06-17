import React from 'react';
import styled from 'styled-components';
import { timeSince, convertToBiobit, CopyableText } from '../utils';

const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: ${props => props.theme.spacing(3)};
`;

const CellWrapper = styled.div`
	flex: 1;
	padding: 5px;
	background: white;

	&:first-child {
		border-radius: 8px 0 0 8px;
	}
	&:last-child {
		border-radius: 0 8px 8px 0;
	}
`;

const Row = styled.section`
	display: flex;
	margin-bottom: 4px;

	${CellWrapper}:first-of-type {
		flex: 0 0 240px; /* blockHash */
	}
	${CellWrapper}:nth-of-type(2) {
		flex: 0 0 210px; /* timestamp */
	}
	${CellWrapper}:nth-of-type(3) {
		flex: 0 0 180px; /* from  */
	}
	${CellWrapper}:nth-of-type(4) {
		flex: 0 0 180px; /* to */
	}
	${CellWrapper}:nth-of-type(5) {
		flex: 0 0 70px; /* status */
	}
	${CellWrapper}:nth-of-type(6) {
		flex: 1 0 auto; /* value */
	}
	${CellWrapper}:nth-of-type(7) {
		flex: 0 0 170px; /* fee */
	}
`;

const Cell = styled.div`
	display: flex;
	align-items: center;
	min-height: 48px;
	padding: ${props => props.theme.spacing(0.6)} ${props => props.theme.spacing(1)};
	font-size: 12px;
	height: 40px;
	width: 100%;
	word-break: break-word;
	font-weight: ${props => props.bold ? 'bold' : 'normal'};

	cursor: ${props => props.copyable ? 'pointer' : 'normal'};
	color: ${props => props.copyable ? '#3A68DE' : props.theme.textPrimary};

	${CellWrapper}:not(:last-child) & {
		border-right: 1px solid #3C87AA;
	}
`;

const Header = styled.div`
	${Cell} {
		font-size: 14px;	
	}
`;

const WalletTransactions = ({ isLoading, accounts, data }) => {
	if (accounts === undefined || isLoading === true)
		return 'loading';
	if (accounts.length === 0)
		return 'no accounts found';

	return (
		<Table>
			<Header>
				<Row>

					<CellWrapper>
						<Cell>
							TXN Hash
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							Date
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							From
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							To
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							Status
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							Value
						</Cell>
					</CellWrapper>
					<CellWrapper>
						<Cell>
							TXN fee
						</Cell>
					</CellWrapper>
				</Row>
			</Header>
			{
				data.map((transaction, index) => (
					<Row key={transaction.blockHash}>
						<CellWrapper>
							<CopyableText textToCopy={transaction.blockHash}>
								<Cell copyable>
									{transaction.blockHash}
								</Cell>
							</CopyableText>
						</CellWrapper>
						<CellWrapper>
							<Cell>
								{timeSince(transaction.timeStamp)}
							</Cell>
						</CellWrapper>
						<CellWrapper>
							<CopyableText textToCopy={transaction.from}>
								<Cell copyable>
									{transaction.from}
								</Cell>
							</CopyableText>
						</CellWrapper>
						<CellWrapper>
							<CopyableText textToCopy={transaction.to}>
								<Cell copyable>
									{transaction.to}
								</Cell>
							</CopyableText>
						</CellWrapper>
						<CellWrapper>
							<Cell>
								N/A
							</Cell>
						</CellWrapper>
						<CellWrapper>
							<Cell bold>
								{convertToBiobit(transaction.value)}
							</Cell>
						</CellWrapper>
						<CellWrapper>
							<Cell>
								{+transaction.gasUsed * +transaction.gasPrice}
							</Cell>
						</CellWrapper>
					</Row>
				))
			}
		</Table>
	);
};

export default WalletTransactions;
