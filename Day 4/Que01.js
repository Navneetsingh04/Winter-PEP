let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}
ask("do you agree?",
    () => (console.log("You agreed.")),
    () => (console.log("You canceled the execution."))
);