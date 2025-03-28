let input = "AACT";

function countlikedna(input) {


    let acount = 0;
    let ccount = 0;
    let gcount = 0;
    let tcount = 0;


    for (let index = 0; index < input.length; index++) {
        if (input[index] == "A") {
            acount++;
        } else if (input[index] == "C") {
            ccount++;
        } else if (input[index] == "G") {
            gcount++;

        } else if (input[index] == "T") {
            tcount++;

        }


    }
    let acounntstr = String(acount);
    let ccountstr = String(ccount);
    let gcountstr = String(gcount);
    let tcountstr = String(tcount);



    console.log(acounntstr + " " + ccountstr + " " + gcountstr + " " + tcountstr);

}
countlikedna(input)