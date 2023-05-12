import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "../temp/table.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
        isiTabel.replace("#NAMA#", value.biodata.nama)
            .replace("#NOHP#", value.biodata.phone_number? value.biodata.phone_number : (value.phone_number ? value.phone_number : '#NOHP#') )
            .replace("#JABATAN#", value.biodata.jabatan)
            .replace("#LOKASI#", value.location)
            .replace("#STATUS#", value.checkin)
            .replace("#HARIKERJA#", value.biodata.hari_kerja? value.biodata.hari_kerja:"HARIKERJA")
            .replace("#JAMKERJA#", value.biodata.jam_kerja? value.biodata.jam_kerja[0].durasi:"#JAMKERJA#")
            .replace("#JAMMASUK#", value.biodata.hari_kerja ? value.biodata.jam_kerja[0].jam_masuk : "#JAMMASUK#")
            .replace("#JAMKELUAR#", value.biodata.hari_kerja ? value.biodata.jam_kerja[0].jam_keluar : "#JAMKELUAR#")
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
            
    addInner("iniTabel", content);
}