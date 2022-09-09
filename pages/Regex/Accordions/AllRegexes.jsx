const AllRegexes = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Newline</div>

            <div className="gridChild2" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Carriage return</div>

            <div className="gridChild2" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Tab</div>

            <div className="gridChild2" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Null character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\0")}>
              \0
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A single character of: a, b or c</div>

            <div className="gridChild2" onClick={() => setClickToken("[abc]")}>
              [abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character except: a, b or c</div>

            <div className="gridChild2" onClick={() => setClickToken("[^abc]")}>
              [^abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character in the range: a-z</div>

            <div className="gridChild2" onClick={() => setClickToken("[a-z]")}>
              [a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character not in the range: a-z</div>

            <div className="gridChild2" onClick={() => setClickToken("[^a-z]")}>
              [^a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              A character in the range: a-z or A-Z
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[a-zA-Z]")}
            >
              [a-zA-Z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Letters and digits</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:alnum:]]")}
            >
              [[:alnum:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Letters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:alpha:]]")}
            >
              [[:alpha:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">ASCII codes 0-127</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:ascii:]]")}
            >
              [[:ascii:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Space or tab only</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:blank:]]")}
            >
              [[:blank:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control characters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:cntrl:]]")}
            >
              [[:cntrl:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Decimal digits</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:digit:]]")}
            >
              [[:digit:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Visible characters (not space)</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:graph:]]")}
            >
              [[:graph:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Lowercase letters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:lower:]]")}
            >
              [[:lower:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Visible characters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:print:]]")}
            >
              [[:print:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Visible punctuation characters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:punct:]]")}
            >
              [[:punct:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Whitespace</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:space:]]")}
            >
              [[:space:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Uppercase letters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:upper:]]")}
            >
              [[:upper:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Word characters</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:word:]]")}
            >
              [[:word:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Hexadecimal digits</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:xdigit:]]")}
            >
              [[:xdigit:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Start of word</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:&lt;:]]")}
            >
              [[:&lt;:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">End of word</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[[:&gt;:]]")}
            >
              [[:&gt;:]]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any single character</div>

            <div className="gridChild2" onClick={() => setClickToken(".")}>
              .
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Alternate - match either a or b</div>

            <div className="gridChild2" onClick={() => setClickToken("a|b")}>
              a|b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\s")}>
              \s
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\S")}>
              \S
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any digit</div>

            <div className="gridChild2" onClick={() => setClickToken("\\d")}>
              \d
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-digit</div>

            <div className="gridChild2" onClick={() => setClickToken("\\D")}>
              \D
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any word character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\w")}>
              \w
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-word character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\W")}>
              \W
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Any Unicode sequences, linebreaks included
            </div>

            <div className="gridChild2" onClick={() => setClickToken("\\X")}>
              \X
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match one data unit</div>

            <div className="gridChild2" onClick={() => setClickToken("\\C")}>
              \C
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Unicode newlines</div>

            <div className="gridChild2" onClick={() => setClickToken("\\R")}>
              \R
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match anything but a newline</div>

            <div className="gridChild2" onClick={() => setClickToken("\\N")}>
              \N
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Vertical whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\v")}>
              \v
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negation of \v</div>

            <div className="gridChild2" onClick={() => setClickToken("\\V")}>
              \V
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Horizontal whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\h")}>
              \h
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negation of \h</div>

            <div className="gridChild2" onClick={() => setClickToken("\\H")}>
              \H
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Reset match</div>

            <div className="gridChild2" onClick={() => setClickToken("\\K")}>
              \K
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match subpattern number #</div>

            <div className="gridChild2" onClick={() => setClickToken("\\#")}>
              \#
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Unicode property X</div>

            <div className="gridChild2" onClick={() => setClickToken("\\pX")}>
              \pX
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Unicode property or script category
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\p{...}")}
            >
              \p&#123;...&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negation of \pX</div>

            <div className="gridChild2" onClick={() => setClickToken("\\PX")}>
              \PX
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negation of \p</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\P{...}")}
            >
              \P&#123;...&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Quote; treat as literals</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\Q...\\E")}
            >
              \Q...\E
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match subpattern `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\k{name}")}
            >
              \k&#123;name&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match subpattern `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\k<name>")}
            >
              \k&lt;name&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match subpattern `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("k'name'")}
            >
              \k&apos;name&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match nth subpattern</div>

            <div className="gridChild2" onClick={() => setClickToken("\\gn")}>
              \gn
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match nth subpattern</div>

            <div className="gridChild2" onClick={() => setClickToken("\\g{n}")}>
              \g&#123;n&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Match text the nth relative previous subpattern matched
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g{-n}")}
            >
              \g&#123;-n&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse nth capture group</div>

            <div className="gridChild2" onClick={() => setClickToken("\\g<n>")}>
              \g&lt;n&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Recurse nth relative upcoming subpattern
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g<+n>")}
            >
              \g&lt;+n&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse nth capture group.</div>

            <div className="gridChild2" onClick={() => setClickToken("\\g'n'")}>
              \g&apos;n&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Recurse nth relative upcoming subpattern
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g'+n'")}
            >
              \g&apos;+n&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Match previously-named capture group `letter`
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g{letter}")}
            >
              \g&#123;letter&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Recurse named capture group `letter`
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g<letter>")}
            >
              \g&lt;letter&gt;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Recurse named capture group `letter`
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\g'letter'")}
            >
              \g&apos;letter&apos;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Hex character YY</div>

            <div className="gridChild2" onClick={() => setClickToken("\\xYY")}>
              \xYY
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Hex character YYYY</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\x{YYYY}")}
            >
              \x&#123;YYYY&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Octal character ddd</div>

            <div className="gridChild2" onClick={() => setClickToken("\\ddd")}>
              \ddd
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control character Y</div>

            <div className="gridChild2" onClick={() => setClickToken("\\cY")}>
              \cY
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Backspace character</div>

            <div className="gridChild2" onClick={() => setClickToken("[\\b]")}>
              [\b]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Makes any character literal</div>

            <div className="gridChild2" onClick={() => setClickToken("\\")}>
              \
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match everything enclosed</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?:...)")}
            >
              (?:...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Capture everything enclosed</div>

            <div className="gridChild2" onClick={() => setClickToken("(...)")}>
              (...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Atomic group (non-capturing)</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?&gt;...)")}
            >
              (?&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Duplicate/reset subpattern group number
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?|...)")}
            >
              (?|...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Comment group</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?#...)")}
            >
              (?#...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Named Capturing Group</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?'name'...)")}
            >
              (?&apos;name&apos;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Named Capturing Group</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?&lt;name&gt;...)")}
            >
              (?&lt;name&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Named Capturing Group</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?P&lt;name&gt;...)")}
            >
              (?P&lt;name&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Inline modifiers</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?imsxUJnxx)")}
            >
              (?imsxUJnxx)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Localized inline modifiers</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?imsxUJnxx:...)")}
            >
              (?imsxUJnxx:...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Conditional statement</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(1)yes|no)")}
            >
              (?(1)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Conditional statement</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(R)yes|no)")}
            >
              (?(R)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recursive Conditional statement</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(R#)yes|no)")}
            >
              (?(R#)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Conditional statement</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(R&amp;name)yes|no)")}
            >
              (?(R&amp;name)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Lookahead conditional</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(?=...)yes|no)")}
            >
              (?(?=...)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Lookbehind conditional</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(?&lt;=...)yes|no)")}
            >
              (?(?&lt;=...)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse entire pattern</div>

            <div className="gridChild2" onClick={() => setClickToken("(?R)")}>
              (?R)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse first subpattern</div>

            <div className="gridChild2" onClick={() => setClickToken("(?1)")}>
              (?1)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse first relative subpattern</div>

            <div className="gridChild2" onClick={() => setClickToken("(?+1)")}>
              (?+1)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse subpattern `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?&amp;name)")}
            >
              (?&amp;name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match subpattern `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?P=name)")}
            >
              (?P=name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Recurse subpattern called `name`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?P&gt;name)")}
            >
              (?P&gt;name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              Pre-define patterns before using them
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?(DEFINE)...)")}
            >
              (?(DEFINE)...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Positive Lookahead</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?=...)")}
            >
              (?=...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negative Lookahead</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?!...)")}
            >
              (?!...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Positive Lookbehind</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?&lt;=...)")}
            >
              (?&lt;=...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Negative Lookbehind</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?&lt;!...)")}
            >
              (?&lt;!...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*ACCEPT)")}
            >
              (*ACCEPT)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*FAIL)")}
            >
              (*FAIL)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*MARK:NAME)")}
            >
              (*MARK:NAME)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*COMMIT)")}
            >
              (*COMMIT)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*PRUNE)")}
            >
              (*PRUNE)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*SKIP)")}
            >
              (*SKIP)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Control verb</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*THEN)")}
            >
              (*THEN)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Pattern modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("(*UTF)")}>
              (*UTF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Pattern modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*UTF8)")}
            >
              (*UTF8)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Pattern modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*UTF16)")}
            >
              (*UTF16)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Pattern modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*UTF32)")}
            >
              (*UTF32)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Pattern modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("(*UCP)")}>
              (*UCP)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("(*CR)")}>
              (*CR)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("(*LF)")}>
              (*LF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*CRLF)")}
            >
              (*CRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*ANYCRLF)")}
            >
              (*ANYCRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("(*ANY)")}>
              (*ANY)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div className="gridChild2" onClick={() => setClickToken("\\R")}>
              \R
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*BSR_ANYCRLF)")}
            >
              (*BSR_ANYCRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Line break modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*BSR_UNICODE)")}
            >
              (*BSR_UNICODE)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Regex engine modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*LIMIT_MATCH=x)")}
            >
              (*LIMIT_MATCH=x)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Regex engine modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*LIMIT_RECURSION=d)")}
            >
              (*LIMIT_RECURSION=d)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Regex engine modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*NO_AUTO_POSSESS)")}
            >
              (*NO_AUTO_POSSESS)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Regex engine modifier</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(*NO_START_OPT)")}
            >
              (*NO_START_OPT)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Zero or one of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a?")}>
              a?
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Zero or more of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">One or more of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a+")}>
              a+
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Exactly 3 of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3&#125;")}
            >
              a&#123;3&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">3 or more of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3,&#125;")}
            >
              a&#123;3,&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Between 3 and 6 of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3,6&#125;")}
            >
              a&#123;3,6&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Greedy quantifier</div>

            <div className="gridChild2" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Lazy quantifier</div>

            <div className="gridChild2" onClick={() => setClickToken("a*?")}>
              a*?
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Possessive quantifier</div>

            <div className="gridChild2" onClick={() => setClickToken("a*+")}>
              a*+
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Start of match</div>

            <div className="gridChild2" onClick={() => setClickToken("\\G")}>
              \G
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Start of string</div>

            <div className="gridChild2" onClick={() => setClickToken("^")}>
              ^
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">End of string</div>

            <div className="gridChild2" onClick={() => setClickToken("$")}>
              $
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Start of string</div>

            <div className="gridChild2" onClick={() => setClickToken("\\A")}>
              \A
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">End of string</div>

            <div className="gridChild2" onClick={() => setClickToken("\\Z")}>
              \Z
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Absolute end of string</div>

            <div className="gridChild2" onClick={() => setClickToken("\\z")}>
              \z
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A word boundary</div>

            <div className="gridChild2" onClick={() => setClickToken("\\b")}>
              \b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Non-word boundary</div>

            <div className="gridChild2" onClick={() => setClickToken("\\B")}>
              \B
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Global</div>

            <div className="gridChild2" onClick={() => setClickToken("g")}>
              g
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Multiline</div>

            <div className="gridChild2" onClick={() => setClickToken("m")}>
              m
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Case insensitive</div>

            <div className="gridChild2" onClick={() => setClickToken("i")}>
              i
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Ignore whitespace / verbose</div>

            <div className="gridChild2" onClick={() => setClickToken("x")}>
              x
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Single line</div>

            <div className="gridChild2" onClick={() => setClickToken("s")}>
              s
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Unicode</div>

            <div className="gridChild2" onClick={() => setClickToken("u")}>
              u
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">eXtra</div>

            <div className="gridChild2" onClick={() => setClickToken("X")}>
              X
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Ungreedy</div>

            <div className="gridChild2" onClick={() => setClickToken("U")}>
              U
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Anchor</div>

            <div className="gridChild2" onClick={() => setClickToken("A")}>
              A
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Duplicate group names</div>

            <div className="gridChild2" onClick={() => setClickToken("J")}>
              J
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Contents in capture group 1</div>

            <div className="gridChild2" onClick={() => setClickToken("$1")}>
              $1
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Contents in capture group `foo`</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("$&#123;foo&#125;")}
            >
              $&#123;foo&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Hexadecimal replacement values</div>

            <div className="gridChild2" onClick={() => setClickToken("\\x20")}>
              \x20
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Hexadecimal replacement values</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("\\x{06fa}")}
            >
              \x&#123;06fa&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Insert a tab</div>

            <div className="gridChild2" onClick={() => setClickToken("\\t")}>
              \t
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Insert a carriage return</div>

            <div className="gridChild2" onClick={() => setClickToken("\\r")}>
              \r
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Insert a newline</div>

            <div className="gridChild2" onClick={() => setClickToken("\\n")}>
              \n
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Insert a form-feed</div>

            <div className="gridChild2" onClick={() => setClickToken("\\f")}>
              \f
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Uppercase Transformation</div>

            <div className="gridChild2" onClick={() => setClickToken("\\U")}>
              \U
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Lowercase Transformation</div>

            <div className="gridChild2" onClick={() => setClickToken("\\L")}>
              \L
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Terminate any Transformation</div>

            <div className="gridChild2" onClick={() => setClickToken("\\E")}>
              \E
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A single character of: a, b or c</div>

            <div className="gridChild2" onClick={() => setClickToken("[abc]")}>
              [abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character except: a, b or c</div>

            <div className="gridChild2" onClick={() => setClickToken("[^abc]")}>
              [^abc]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character in the range: a-z</div>

            <div className="gridChild2" onClick={() => setClickToken("[a-z]")}>
              [a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A character not in the range: a-z</div>

            <div className="gridChild2" onClick={() => setClickToken("[^a-z]")}>
              [^a-z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">
              A character in the range: a-z or A-Z
            </div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("[a-zA-Z]")}
            >
              [a-zA-Z]
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any single character</div>

            <div className="gridChild2" onClick={() => setClickToken(".")}>
              .
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Alternate - match either a or b</div>

            <div className="gridChild2" onClick={() => setClickToken("a|b")}>
              a|b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\s")}>
              \s
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-whitespace character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\S")}>
              \S
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any digit</div>

            <div className="gridChild2" onClick={() => setClickToken("\\d")}>
              \d
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-digit</div>

            <div className="gridChild2" onClick={() => setClickToken("\\D")}>
              \D
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any word character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\w")}>
              \w
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Any non-word character</div>

            <div className="gridChild2" onClick={() => setClickToken("\\W")}>
              \W
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Match everything enclosed</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("(?:...)")}
            >
              (?:...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Capture everything enclosed</div>

            <div className="gridChild2" onClick={() => setClickToken("(...)")}>
              (...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Zero or one of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a?")}>
              a?
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Zero or more of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a*")}>
              a*
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">One or more of a</div>

            <div className="gridChild2" onClick={() => setClickToken("a+")}>
              a+
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Exactly 3 of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3&#125;")}
            >
              a&#123;3&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">3 or more of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3,&#125;")}
            >
              a&#123;3,&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Between 3 and 6 of a</div>

            <div
              className="gridChild2"
              onClick={() => setClickToken("a&#123;3,6&#125;")}
            >
              a&#123;3,6&#125;
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Start of string</div>

            <div className="gridChild2" onClick={() => setClickToken("^")}>
              ^
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">End of string</div>

            <div className="gridChild2" onClick={() => setClickToken("$")}>
              $
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">A word boundary</div>

            <div className="gridChild2" onClick={() => setClickToken("\\b")}>
              \b
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="gridChild1">Non-word boundary</div>

            <div className="gridChild2" onClick={() => setClickToken("\\B")}>
              \B
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default AllRegexes;
