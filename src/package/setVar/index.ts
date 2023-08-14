function setVar(varName: string, varValue: any) {
  (document.documentElement || document.body).style.setProperty(
    varName,
    varValue
  );
}
