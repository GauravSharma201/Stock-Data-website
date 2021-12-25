import React, { useState, useEffect } from "react";
import "./stockDetailsTable.css";
import { Search, ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllData,
  saveDataFunc,
  clearError,
} from "../../actions/sdtActions";
import { Link } from "react-router-dom";

function StockDetailsTable() {
  let fntSzPag = ".8rem";
  let [search, setSearch] = useState("");
  let [stockData, setStockData] = useState([]);
  let [numElemSkip, setNumElemSkip] = useState(0);
  let [currentPage, setCurrentPage] = useState(1);
  let dispatch = useDispatch();

  let { stocks } = useSelector((state) => state.stocks);
  let { saveStock, saveErr } = useSelector((state) => state.savedStock);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let searchedRes = stockData.filter((elem) =>
    elem.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  let elemLength = searchedRes.length;
  let value = searchedRes.length / 5;
  let totalNumPage = Math.ceil(value);

  searchedRes = searchedRes.filter((elem, index) => index >= numElemSkip);

  let nextPage = () => {
    if (currentPage < totalNumPage) {
      setCurrentPage(currentPage + 1);
      setNumElemSkip(numElemSkip + 5);
    }
  };
  let prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setNumElemSkip(numElemSkip - 5);
    }
  };

  useEffect(() => {
    let baseUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";
    axios
      .get(baseUrl)
      .then(({ data }) => {
        setStockData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (saveErr) {
      alert(saveErr);
      dispatch(clearError());
    }
    if (saveStock) {
      dispatch(fetchAllData());
    }
    dispatch(fetchAllData());
  }, [dispatch, saveErr, saveStock]);
  return (
    <div className="stockDetailTable">
      <div className="sdtTop">
        <h4 className="sdtHead">Stock Details Table</h4>
        <div className="stdSearchCont">
          <Search />
          <input
            type="search"
            name="sdtSearch"
            id="sdtSearch"
            className="sdtSearch"
            placeholder="Search By Company Name"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="sdtCenter">
        {stocks ? (
          <>
            <div className="stockListHead">
              <div className="stdElems">COMPANY NAME</div>
              <div className="stdElems">SYMBOL</div>
              <div className="stdElems">MARKET CAP</div>
              <div className="stdElems"></div>
              <div className="stdElems">CURRENT PRIZE</div>
            </div>
            {searchedRes.map((elem, index) => {
              return (
                <div
                  className="stockListRow"
                  key={`stockListNum${index}${elem.id}`}
                >
                  <div className="stdElems">
                    <span className="sdtCompNamePara">{elem.name}</span>
                  </div>
                  <div className="stdElems">{elem.symbol}</div>
                  <div className="stdElems">$ {elem.market_cap}</div>
                  <div className="stdElems">
                    {stocks.find((x) => x.stockId === elem.id) ? (
                      <Link to={"/view"}>
                        <button className="sdtSaveDataBtn viewDataBtn">
                          view data
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="sdtSaveDataBtn"
                        onClick={() => dispatch(saveDataFunc(elem))}
                      >
                        save data
                      </button>
                    )}
                  </div>
                  <div className="stdElems">$ {elem.current_price} USD</div>
                </div>
              );
            })}
          </>
        ) : (
          "loading Data"
        )}
      </div>
      <div className="sdtBottom">
        <div className="paginationCont">
          <span className="paginCount">
            {currentPage}-{totalNumPage} of {elemLength}
          </span>
          <div className="arrowBtnCont">
            <ArrowBackIos
              style={{ fontSize: fntSzPag }}
              className="paginBtn"
              onClick={() => prevPage()}
            />
            <ArrowForwardIos
              style={{ fontSize: fntSzPag }}
              className="paginBtn"
              onClick={() => nextPage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetailsTable;
