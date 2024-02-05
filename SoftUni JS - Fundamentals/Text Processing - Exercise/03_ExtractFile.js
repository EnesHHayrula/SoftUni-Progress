function extractFile(path) {
    let file = path.substring(path.lastIndexOf("\\") + 1)
    let fileName = file.substring(0, file.lastIndexOf("."))
    let fileExtension = file.substring(file.lastIndexOf(".") + 1)
    console.log(`File name: ${fileName} \n File extension: ${fileExtension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
console.log("-----------");
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
