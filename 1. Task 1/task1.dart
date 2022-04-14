void main() {
  const List<String> splChar = ['~','`','!','@','#','\$','%','^','&','*','(',')','-','_','+','=','{','}','[',']',
    '|','\\','/',';','\"','\'','<','>',',','?',':','.'];

  final List<dynamic> arr = ['n',2,'&','a','l',9,'\$','q',47,'i','a','j','b','z','%',8];

  List<String> arrSplChar = [];
  List<dynamic> reversedArr = [];

  for(var value in arr) {

    if (splChar.contains(value)) {
      arrSplChar.add(value);
      continue;
    }

    reversedArr.insert(0, value);

  }

  for(String splCh in arrSplChar) {
    reversedArr.insert(arr.indexOf(splCh), splCh);
  }

  print(reversedArr);
}
