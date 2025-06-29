import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
const items = [...Array(33).keys()];

function Items({ currentItems }) {
	return (
		<div className="items">
			{currentItems &&
				currentItems.map((item) => (
					<div>
						<h3>Item #{item}</h3>
					</div>
				))}
		</div>
	);
}

const TableUserPaginate = (props) => {
	const { listUsers, fetchListUsersPaginate } = props;

	const handlePageClick = (event) => {
		props.setCurrentPage(event.selected + 1);
		fetchListUsersPaginate(event.selected + 1);
		// console.log(props.currentPage);
	};
	return (
		<div>
			<table className="table table-hover table-bordered">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">username</th>
						<th scope="col">email</th>
						<th scope="col">role</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{listUsers &&
						listUsers.length > 0 &&
						listUsers.map((item, index) => {
							return (
								<tr key={`table-user-${index}`}>
									<td>{item.id}</td>
									<td>{item.username}</td>
									<td>{item.email}</td>
									<td>{item.role}</td>
									<td>
										<button
											className="btn btn-secondary"
											onClick={() => props.handleClickBtnView(item)}
										>
											View
										</button>
										<button
											className="btn btn-warning mx-3"
											onClick={() => props.handleClickBtnUpdate(item)}
										>
											Update
										</button>
										<button
											className="btn btn-danger"
											onClick={() => props.handleClickBtnDelete(item)}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					{listUsers && listUsers.length === 0 && (
						<tr>
							<td colSpan={"4"}>Not found data</td>
						</tr>
					)}
				</tbody>
			</table>
			<ReactPaginate
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={props.pageCount}
				previousLabel="< previous"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				renderOnZeroPageCount={null}
				forcePage={props.currentPage - 1}
			/>
		</div>
	);
};

export default TableUserPaginate;
