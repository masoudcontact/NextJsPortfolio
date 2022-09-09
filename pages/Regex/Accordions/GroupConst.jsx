const GroupConst = ({ setClickToken }) => {
  return (
    <div className="y8wXX">
      <ul className="ullist">
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match everything enclosed</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?:...)")}
            >
              (?:...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Capture everything enclosed</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(...)")}>
              (...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Atomic group (non-capturing)</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?>...")}
            >
              (?&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Duplicate/reset subpattern group number</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?|...)")}
            >
              (?|...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Comment group</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?#...)")}
            >
              (?#...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Named Capturing Group</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?'name'...)")}
            >
              (?&apos;name&apos;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Named Capturing Group</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?<name>...)")}
            >
              (?&lt;name&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Named Capturing Group</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?P<name>...)")}
            >
              (?P&lt;name&gt;...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Inline modifiers</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?imsxUJnxx)")}
            >
              (?imsxUJnxx)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Localized inline modifiers</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?imsxUJnxx:...)")}
            >
              (?imsxUJnxx:...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Conditional statement</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(1)yes|no)")}
            >
              (?(1)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Conditional statement</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(R)yes|no)")}
            >
              (?(R)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recursive Conditional statement</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(R#)yes|no)")}
            >
              (?(R#)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Conditional statement</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(R&amp;name)yes|no)")}
            >
              (?(R&amp;name)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Lookahead conditional</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(?=...)yes|no)")}
            >
              (?(?=...)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Lookbehind conditional</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(?<=...)yes|no)")}
            >
              (?(?&lt;=...)yes|no)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse entire pattern</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(?R)")}>
              (?R)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse first subpattern</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(?1)")}>
              (?1)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse first relative subpattern</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(?+1)")}>
              (?+1)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse subpattern `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?&name)")}
            >
              (?&amp;name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Match subpattern `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?P=name)")}
            >
              (?P=name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Recurse subpattern called `name`</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?P>name)")}
            >
              (?P&gt;name)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pre-define patterns before using them</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?(DEFINE)...)")}
            >
              (?(DEFINE)...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Positive Lookahead</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?=...)")}
            >
              (?=...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negative Lookahead</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?!...)")}
            >
              (?!...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Positive Lookbehind</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?<=...)")}
            >
              (?&lt;=...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Negative Lookbehind</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(?<!...)")}
            >
              (?&lt;!...)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*ACCEPT)")}
            >
              (*ACCEPT)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*FAIL)")}
            >
              (*FAIL)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*MARK:NAME)")}
            >
              (*MARK:NAME)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*COMMIT)")}
            >
              (*COMMIT)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*PRUNE)")}
            >
              (*PRUNE)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*SKIP)")}
            >
              (*SKIP)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Control verb</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*THEN)")}
            >
              (*THEN)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pattern modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*UTF)")}
            >
              (*UTF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pattern modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*UTF8)")}
            >
              (*UTF8)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pattern modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*UTF16)")}
            >
              (*UTF16)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pattern modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*UTF32)")}
            >
              (*UTF32)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Pattern modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*UCP)")}
            >
              (*UCP)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(*CR)")}>
              (*CR)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("(*LF)")}>
              (*LF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*CRLF)")}
            >
              (*CRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*ANYCRLF)")}
            >
              (*ANYCRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*ANY)")}
            >
              (*ANY)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div className="IVPLo i8N8D" onClick={() => setClickToken("\\R")}>
              \R
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*BSR_ANYCRLF)")}
            >
              (*BSR_ANYCRLF)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Line break modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*BSR_UNICODE)")}
            >
              (*BSR_UNICODE)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Regex engine modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*LIMIT_MATCH=x)")}
            >
              (*LIMIT_MATCH=x)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Regex engine modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*LIMIT_RECURSION=d)")}
            >
              (*LIMIT_RECURSION=d)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Regex engine modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*NO_AUTO_POSSESS)")}
            >
              (*NO_AUTO_POSSESS)
            </div>
          </div>
        </li>
        <hr />
        <li className="b0Wk4 tu7rF" role="button" tabIndex="0">
          <div className="divegrid">
            <div className="Lta24">Regex engine modifier</div>
            <div
              className="IVPLo i8N8D"
              onClick={() => setClickToken("(*NO_START_OPT)")}
            >
              (*NO_START_OPT)
            </div>
          </div>
        </li>
        <hr />
      </ul>
    </div>
  );
};

export default GroupConst;
