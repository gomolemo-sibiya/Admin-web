import React from 'react'
import { 
  TableWrapper,
  TableContainer,
  Heading,
  TableHead,
  TableBody,
  TableRow,
  TableData,
  Search,
  ActionBtn
} from './table';
import cover from '../../assets/favpng_pdf.png';

const Table = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe Table Head Table Head Table Head Table Head",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 3,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith Table Head Table Head Table Head Table Head",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    // {
    //   id: 4,
    //   product: "Razer Blade 15",
    //   img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    //   customer: "Jane Smith Table Head Table Head Table Head Table Head",
    //   date: "1 March",
    //   amount: 920,
    //   method: "Online",
    //   status: "Approved",
    // },
    // {
    //   id: 5,
    //   product: "ASUS ROG Strix",
    //   img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    //   customer: "Harold Carol Table Head Table Head Table Head Table Head",
    //   date: "1 March",
    //   amount: 2000,
    //   method: "Online",
    //   status: "Pending",
    // },
    // {
    //   id: 4,
    //   product: "Razer Blade 15",
    //   img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    //   customer: "Jane Smith Table Head Table Head Table Head Table Head",
    //   date: "1 March",
    //   amount: 920,
    //   method: "Online",
    //   status: "Approved",
    // },
    // {
    //   id: 5,
    //   product: "ASUS ROG Strix",
    //   img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    //   customer: "Harold Carol Table Head Table Head Table Head Table Head",
    //   date: "1 March",
    //   amount: 2000,
    //   method: "Online",
    //   status: "Pending",
    // },
  ];

  return (
    <TableContainer>
      <div className='table-top'>
        <div className='search-bar'>
          <Search placeholder='search'/>
        </div>
        <div className='action-button'>
          <ActionBtn />
        </div>
      </div>
      <TableWrapper>
        <Heading>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>
              <div className="date-head">
                Date
              </div>
            </TableHead> 
            <TableHead>File Name</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </Heading>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableData>
                <div className="id">
                  {row.id}
                </div>
              </TableData>
              <TableData>
                  <div className="image-block">
                    <img src={cover} alt="" className="image" />
                  </div>
              </TableData>
              <TableData style={{color: '#A8A8A8'}}>
                <div className="date">
                  {row.date}
                </div>
              </TableData>
              <TableData>{row.customer}</TableData>
              <TableData>
                <div className="buttons">
                  <button className="button button-open"> Open </button>
                  <button className="button button-download"> Download </button>
                </div>
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </TableContainer>
  )
}

export default Table