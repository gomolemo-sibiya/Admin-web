import styled from "styled-components";
import { Gauge } from "phosphor-react";

export const TableContainer = styled.div`
	display:flex;
	flex-direction: column;
	padding: 20px;
	background-color: #FFFFFF;
	border-radius: 30px;
	box-shadow: 6px 4px 5px 0px rgba(232,232,232,0.75);
	-webkit-box-shadow: 6px 4px 5px 0px rgba(232,232,232,0.75);
	-moz-box-shadow: 6px 4px 5px 0px rgba(232,232,232,0.75);
    color: #423F46;
	font-size: 16px;

	.table-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
`;

export const TableWrapper = styled.table`
    width: 100%;
`;

export const Heading = styled.thead`

`;

export const TableBody = styled.tbody`

`;

export const TableHead = styled.th`
	text-align: left;

	.date-head {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const TableRow = styled.tr`
	height: 40px;
`;

export const TableData = styled.td`
	.id, .date, .image-block {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 15px;
	}

	.image-block .image {
		border-radius: 8px;
		width: 25px;
    	height: auto;
		background-color: #FCEBEB;
		padding: 5px;
	}

	.buttons {
		display: flex;
		justify-content: flex-end; 
		
	}

	.button {
		margin: 0 10px 0 0;
		border: none;
		border-radius: 5px;
		width: 80px;
		height: 30px;
		color: #FFF;
	}

	.button-open {
		background-color: #56C596;
	}
	
	.button-download {
		background-color: #31456A;
	}
`;

export const Search = styled.input`
	width: 185px;
	height: 25px;
	overflow: hidden;
	border-radius: 15px;
	border: 1px solid #A8A8A8;
	padding: 0 10px;

	:active {
		border: none;
	}
`;

export const ActionBtn = () =>{
	return (
		<div 
			style={{
				width: 'auto', 
				height: '25px',
				backgroundColor: 'rgba(86, 197, 150, 0.1)',
				overflow: 'hidden',
				borderRadius: '28px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				padding: '5px 10px',
				gap: '10px'
			}}
		>
			<div>
				See All
			</div>
			<div>
				<Gauge />
			</div>
		</div>
	)
}

