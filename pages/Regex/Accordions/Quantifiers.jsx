const Quantifiers = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Zero or one of a</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a?")}>
              a?
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Zero or more of a</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">One or more of a</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a+")}>
              a+
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Exactly 3 of a</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a{3}")}>
              a&#123;3&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">3 or more of a</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a{3,}")}>
              a&#123;3,&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Between 3 and 6 of a</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("a{3,6}")}
            >
              a&#123;3,6&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Greedy quantifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Lazy quantifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a*?")}>
              a*?
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Possessive quantifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a*+")}>
              a*+
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Quantifiers;
