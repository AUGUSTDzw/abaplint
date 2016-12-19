import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "SUBMIT zdemo WITH rb_down = abap_true WITH rb_show = abap_false AND RETURN.",
  "SUBMIT (wa_report-progname) VIA SELECTION-SCREEN AND RETURN.",
  "SUBMIT zfoobar WITH s_print = iv_tddest WITH s_pnow = 'X' VIA JOB 'BKG' NUMBER lv_number AND RETURN.",
  "SUBMIT (progname) AND RETURN WITH p_backfn = filename WITH rb_back  = 'X'.",
];

statementType(tests, "SUBMIT", Statements.Submit);