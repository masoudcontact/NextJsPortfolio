const Anchors = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Start of match</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\G")}>
              \G
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Start of string</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("^")}>
              ^
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">End of string</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("$")}>
              $
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Start of string</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\A")}>
              \A
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">End of string</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\Z")}>
              \Z
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Absolute end of string</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\z")}>
              \z
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A word boundary</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\b")}>
              \b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Non-word boundary</div>
            <div className="IVPLo i8N8D" onClick={(e) => setClickToken("\\B")}>
              \B
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Anchors;
