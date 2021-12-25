import React, { useEffect } from "react";
import {
  fetchAllData,
  deleteDataFunc,
  clearError,
} from "../../actions/sdtActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./view.css";
import HeroCardCont from "../heroCardCont/heroCardCont";

function View() {
  let { stocks, fetchAllErr } = useSelector((state) => state.stocks);
  let { delStock, delErr } = useSelector((state) => state.deleteStock);
  let dispatch = useDispatch();

  useEffect(() => {
    if (delErr) {
      alert(delErr);
      dispatch(clearError());
    }
    if (fetchAllErr) {
      alert(fetchAllErr);
      dispatch(clearError());
    }
    if (delStock) {
      dispatch(fetchAllData());
    }
    dispatch(fetchAllData());
  }, [delErr, fetchAllErr, delStock, dispatch]);
  return (
    <section className="homeSec">
      <HeroCardCont />
      <div className="stockDetailTable">
        <div className="sdtTop">
          <h4 className="sdtHead">Saved Data Table</h4>
        </div>
        <div className="sdtCenter">
          {stocks &&
            stocks.map((elem, index) => {
              return (
                <div
                  className="stockListRow"
                  key={`stockListNum${index}${elem._id}`}
                >
                  <div className="stdElems">
                    <span className="sdtCompNamePara">{elem.name}</span>
                  </div>
                  <div className="stdElems">{elem.symbol}</div>
                  <div className="stdElems">$ {elem.market_cap}</div>
                  <div className="stdElems">
                    <button
                      className="sdtSaveDataBtn"
                      onClick={() => dispatch(deleteDataFunc(elem._id))}
                    >
                      Delete data
                    </button>
                  </div>
                  <div className="stdElems">$ {elem.current_price} USD</div>
                </div>
              );
            })}
        </div>
        <div className="sdtBottomView">
          <Link to="/">
            <button className="sdtSaveDataBtn">Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default View;
