var pushArray = [];

      function pop() {
        let str = document.getElementById("result").value;
        str = str.toString();
        str = str.slice(0, -1);
        console.log(str);
        document.getElementById("result").value = str;
      }
      function dis(val) {
        document.getElementById("result").value += val;
      }
      function solve() {
        let x = document.getElementById("result").value;
        pushArray.push(x);
        let y = eval(x);
        document.getElementById("result").value = y;
      }

      function clr() {
        document.getElementById("result").value = "";
        document.getElementById("result1").value = "";
        pushArray = [];
      }
      function getData() {
        const returnPushArray = pushArray.join("\n");

        document.getElementById("result1").value = returnPushArray;
      }