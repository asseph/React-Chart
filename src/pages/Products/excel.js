
import XLSX from 'xlsx';


const convertJsonToExcel = (data) => {

  const workSheet = XLSX.utils.json_to_sheet(data);
  const workBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workBook, workSheet, 'data');
  // Generate buffer
  XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });

  // Binary string
  XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });

  return ( XLSX.writeFile(workBook, 'excel.xlsx') );

};

export default convertJsonToExcel;
