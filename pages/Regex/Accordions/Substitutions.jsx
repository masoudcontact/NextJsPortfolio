const Substitutions = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Contents in capture group 1</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("$1")}>
              $1
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Contents in capture group `foo`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("${foo}")}
            >
              $&#123;foo&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Hexadecimal replacement values</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\x20")}>
              \x20
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Hexadecimal replacement values</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\x{06fa}")}
            >
              \x&#123;06fa&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Insert a tab</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Insert a carriage return</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Insert a newline</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Insert a form-feed</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\f")}>
              \f
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Uppercase Transformation</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\U")}>
              \U
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Lowercase Transformation</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\L")}>
              \L
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Terminate any Transformation</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\E")}>
              \E
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default Substitutions;
