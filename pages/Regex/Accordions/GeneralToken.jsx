const GeneralToken = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Newline</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Carriage return</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Tab</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Null character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\0")}>
              \0
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default GeneralToken;
