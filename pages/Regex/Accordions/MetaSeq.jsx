const MetaSeq = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any single character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken(".")}>
              .
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Alternate - match either a or b</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("a|b")}>
              a|b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any whitespace character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\s")}>
              \s
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any non-whitespace character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\S")}>
              \S
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any digit</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\d")}>
              \d
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any non-digit</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\D")}>
              \D
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any word character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\w")}>
              \w
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Any non-word character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\W")}>
              \W
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">
              Any Unicode sequences, linebreaks included
            </div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\X")}>
              \X
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match one data unit</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\C")}>
              \C
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Unicode newlines</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\R")}>
              \R
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match anything but a newline</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\N")}>
              \N
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Vertical whitespace character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\v")}>
              \v
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negation of \v</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\V")}>
              \V
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Horizontal whitespace character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\h")}>
              \h
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negation of \h</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\H")}>
              \H
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Reset match</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\K")}>
              \K
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match subpattern number #</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\#")}>
              \#
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Unicode property X</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\pX")}>
              \pX
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Unicode property or script category</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\p{...}")}
            >
              \p&#123;...&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negation of \pX</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\PX")}>
              \PX
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negation of \p</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\P{...}")}
            >
              \P&#123;...&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Quote; treat as literals</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\Q...\\E")}
            >
              \Q...\E
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match subpattern `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\k{name}")}
            >
              \k&#123;name&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match subpattern `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\k<name>")}
            >
              \k&lt;name&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match subpattern `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\k'name'")}
            >
              \k&apos;name&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match nth subpattern</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\gn")}>
              \gn
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match nth subpattern</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g{n}")}
            >
              \g&#123;n&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">
              Match text the nth relative previous subpattern matched
            </div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g{-n}")}
            >
              \g&#123;-n&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse nth capture group</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g<n>")}
            >
              \g&lt;n&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">
              Recurse nth relative upcoming subpattern
            </div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g<+n>")}
            >
              \g&lt;+n&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse nth capture group.</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g'n'")}
            >
              \g&apos;n&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">
              Recurse nth relative upcoming subpattern
            </div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g'+n'")}
            >
              \g&apos;+n&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">
              Match previously-named capture group `letter`
            </div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g{letter}")}
            >
              \g&#123;letter&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse named capture group `letter`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\<letter>")}
            >
              \g&lt;letter&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse named capture group `letter`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\g'letter'")}
            >
              \g&apos;letter&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Hex character YY</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\xYY")}>
              \xYY
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Hex character YYYY</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("\\x{YYYY}")}
            >
              \x&#123;YYYY&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Octal character ddd</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\ddd")}>
              \ddd
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control character Y</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\cY")}>
              \cY
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Backspace character</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("[\\b]")}>
              [\b]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Makes any character literal</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\")}>
              \
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default MetaSeq;
