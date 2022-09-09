const FlagsModifiers = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Global</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("g")}>
              g
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Multiline</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("m")}>
              m
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Case insensitive</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("i")}>
              i
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Ignore whitespace / verbose</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("x")}>
              x
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Single line</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("s")}>
              s
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Unicode</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("u")}>
              u
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">eXtra</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("X")}>
              X
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Ungreedy</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("U")}>
              U
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Anchor</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("A")}>
              A
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Duplicate group names</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("J")}>
              J
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default FlagsModifiers;
