const MetaSeq = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A single character of: a, b or c</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[abc]")}
            >
              [abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A character except: a, b or c</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[^abc]")}
            >
              [^abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A character in the range: a-z</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[a-z]")}
            >
              [a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A character not in the range: a-z</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[^a-z]")}
            >
              [^a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">A character in the range: a-z or A-Z</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[a-zA-Z]")}
            >
              [a-zA-Z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Letters and digits</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:alnum:]]")}
            >
              [[:alnum:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Letters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:alpha:]]")}
            >
              [[:alpha:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">ASCII codes 0-127</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:ascii:]]")}
            >
              [[:ascii:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Space or tab only</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:blank:]]")}
            >
              [[:blank:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control characters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:cntrl:]]")}
            >
              [[:cntrl:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Decimal digits</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:digit:]]")}
            >
              [[:digit:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Visible characters (not space)</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:graph:]]")}
            >
              [[:graph:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Lowercase letters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:lower:]]")}
            >
              [[:lower:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Visible characters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:print:]]")}
            >
              [[:print:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Visible punctuation characters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:punct:]]")}
            >
              [[:punct:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Whitespace</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:space:]]")}
            >
              [[:space:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Uppercase letters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:upper:]]")}
            >
              [[:upper:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Word characters</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:word:]]")}
            >
              [[:word:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Hexadecimal digits</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:xdigit:]]")}
            >
              [[:xdigit:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Start of word</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:<:]]")}
            >
              [[:&lt;:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">End of word</div>
            <div
              className="IVPLo i8N8D"
              onClick={(e) => setClickToken("[[:>:]]")}
            >
              [[:&gt;:]]
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default MetaSeq;
