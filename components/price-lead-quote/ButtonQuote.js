//import GeneratePdfQuote from "/components/price-lead-quote/GeneratePdfQuote";
import { jsPDF, HTMLOptionImage } from "jspdf";
import { Price } from "/components/price-lead-quote/Price";
import { Leadtime } from "/components/price-lead-quote/Leadtime";

// JSON imports
import DataComputer from "/public/json/DataComputer.json";
import DataFile_DingoOmni from "/public/json/DataDingoOmni.json";
import DataFile_DingoDiff from "/public/json/DataDingoDiff.json";
const DataFiles = [DataFile_DingoOmni, DataFile_DingoDiff];

// CPR logo path for PDF
const ImagePath_CprIcon = "/public/images/clearpath_robotics_color.jpg";

// number of PDF pages
const PageCount = 6;

function ButtonQuote(props) {
  function GeneratePdfQuote() {
    // robot data from the Next.js Page
    for (let i = 0; i < DataFiles.length; i++) {
      if (DataFiles[i].robotPlatform.label == props.robotPlatform) {
        const DataFile = DataFiles[i];
      }
    }

    // PDF setup - create PDF
    {
      const doc = new jsPDF();
      doc.setFont("helvetica");
    }

    // PDF setup - date and images
    {
      var image = new Image();
      image.src = "/images/clearpath_robotics_color.jpg";

      const date = new Date();
      const quote_name =
        "Quote-RCW-" +
        String(date.getFullYear()) +
        "-" +
        String(date.getMonth() + 1) +
        "-" +
        String(date.getDate()) +
        "-" +
        String(date.getHours()) +
        "-" +
        String(date.getMinutes()) +
        "-" +
        String(date.getSeconds()); // month is zero indexed

      const quote_date =
        String(date.getFullYear()) +
        "-" +
        String(date.getMonth() + 1) +
        "-" +
        String(date.getDate()) +
        "   |   " +
        String(date.getHours()) +
        ":" +
        String(date.getMinutes()) +
        ":" +
        String(date.getSeconds()); // month is zero indexed
    }

    // PDF setup - repeated pages formatting
    for (let i = 1; i < PageCount + 1; i++) {
      doc.addImage(image, "JPEG", 135, 16, 1479 / 25, 375 / 25);

      // header - quote number
      doc.setFontSize(12);
      doc.text(135, 48, quote_name);

      // header - quote date
      doc.setFontSize(8);
      doc.text(20, 20, "Quote Date: ");
      doc.text(40, 20, quote_date);

      // header - quote prepared by
      doc.text(20, 24.5, "Prepared By: ");
      doc.text(40, 24.5, "Robot Configuration Webpage   |   sales@clearpathrobotics.com");

      // header - seller
      doc.text(20, 29, "Seller: ");
      doc.text(40, 29, "Clearpath Robotics, Inc.");
      doc.text(40, 33, "1425 Strasburg Road Unit 2A, Kitchener, Ontario, N2R 1H2");
      doc.text(40, 37, "Tel: 1 (800) 301-3863 x122 / Fax: 1 (888) 374-0091");
      doc.text(40, 41, "www.clearpathrobotics.com");

      // header - title
      doc.setFontSize(12);
      doc.text(20, 48, "Title: ");
      doc.text(40, 48, DataFile.pdfText.robotPlatform.labelPdf + ", Robot Configuration Webpage");

      // horizontal line separating header and columns
      doc.setLineWidth(0.2);
      doc.line(20, 50, 200, 50);

      // footer
      doc.setFontSize(8);
      doc.text(190, 287, String([i]) + "/" + String(PageCount));

      if (i < PageCount) {
        // columns
        doc.setFontSize(8);
        doc.text(21, 53, "ID");
        doc.text(27, 53, "Part #");
        doc.text(40, 53, "Description");
        doc.text(141, 53, "Qty");
        doc.text(149, 53, "Price ($ USD )");
        doc.text(174, 53, "Ext. Price ($ USD )");

        // horizontal line separating columns and body
        doc.line(20, 54, 200, 54);

        // dark grey rectangle background - component category
        doc.setDrawColor(0);
        doc.setFillColor(69, 69, 69);
        doc.rect(20, 54, 180, 5, "F");

        // light grey rectangle background - quote ID
        doc.setFillColor(206, 206, 206);
        doc.rect(20, 59, 180, 41, "F");
        doc.rect(20, 139, 180, 41, "F");
        doc.rect(20, 219, 180, 41, "F");

        // footer
        doc.text(21, 287, "Purchaser Initials ___________");

        // add a new page to the PDF
        doc.addPage();
      }
    }

    // PDF setup - content for robot configuration
    {
      // page 1 -------------------------------------------------------------------------
      // page 1 - robot platform, colour, battery
      {
        doc.setPage(1);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Robot Platform, Colour, Battery Chemistry");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "1"); // line ID
        {
          doc.text(27, 63, DataFile.pdfText.robotPlatform.itemNumber); // item number
          doc.text(141, 63, "1"); // quantity
          doc.text(149, 63, "$" + String(DataFile.robotPlatform.price)); // price, per
          doc.text(174, 63, "$" + String(DataFile.robotPlatform.price)); // price, extended
          doc.text(40, 63, DataFile.pdfText.robotPlatform.description[0]); // description 0
          doc.text(40, 67, DataFile.pdfText.robotPlatform.description[1]); // description 1
          doc.text(40, 71, DataFile.pdfText.robotPlatform.description[2]); // description 2
          doc.text(40, 75, DataFile.pdfText.robotPlatform.description[3]); // description 3
          doc.text(40, 79, DataFile.pdfText.robotPlatform.description[4]); // description 4
          doc.text(40, 83, DataFile.pdfText.robotPlatform.description[5]); // description 5
          doc.text(40, 87, DataFile.pdfText.robotPlatform.description[6]); // description 6
          doc.text(40, 91, DataFile.pdfText.robotPlatform.description[7]); // description 7
          doc.text(40, 95, DataFile.pdfText.robotPlatform.description[8]); // description 8
        }

        doc.text(21, 103, "2"); // line ID
        {
          doc.text(27, 103, "042000"); // item number
          doc.text(141, 103, "1"); // quantity
          for (let i = 0; i < DataFile.panelColours.length; i++) {
            if (DataFile.panelColours[i].label == props.colourState.label) {
              doc.text(149, 103, "$" + String(DataFile.panelColours[i].price)); // price, per
              doc.text(174, 103, "$" + String(DataFile.panelColours[i].price)); // price, extended
            }
          }
          doc.text(40, 103, DataFile.pdfText.panelColours[props.colourState.label].description[0]); // description 0
          doc.text(40, 107, DataFile.pdfText.panelColours[props.colourState.label].description[1]); // description 1
          doc.text(40, 111, DataFile.pdfText.panelColours[props.colourState.label].description[2]); // description 2
          doc.text(40, 115, DataFile.pdfText.panelColours[props.colourState.label].description[3]); // description 3
          doc.text(40, 119, DataFile.pdfText.panelColours[props.colourState.label].description[4]); // description 4
          doc.text(40, 123, DataFile.pdfText.panelColours[props.colourState.label].description[5]); // description 5
          doc.text(40, 127, DataFile.pdfText.panelColours[props.colourState.label].description[6]); // description 6
          doc.text(40, 131, DataFile.pdfText.panelColours[props.colourState.label].description[7]); // description 7
          doc.text(40, 135, DataFile.pdfText.panelColours[props.colourState.label].description[8]); // description 8
        }

        doc.text(21, 143, "3"); // line ID
        {
          doc.text(27, 143, "042000"); // item number
          doc.text(141, 143, "1"); // quantity
          for (let i = 0; i < DataFile.batteryItems.length; i++) {
            if (DataFile.batteryItems[i].label == props.batteryState.label) {
              doc.text(149, 143, "$" + String(DataFile.batteryItems[i].price)); // price, per
              doc.text(174, 143, "$" + String(DataFile.batteryItems[i].price)); // price, extended
            }
          }
          doc.text(40, 143, DataFile.pdfText.batteryItems[props.batteryState.label].description[0]); // description 0
          doc.text(40, 147, DataFile.pdfText.batteryItems[props.batteryState.label].description[1]); // description 1
          doc.text(40, 151, DataFile.pdfText.batteryItems[props.batteryState.label].description[2]); // description 2
          doc.text(40, 155, DataFile.pdfText.batteryItems[props.batteryState.label].description[3]); // description 3
          doc.text(40, 159, DataFile.pdfText.batteryItems[props.batteryState.label].description[4]); // description 4
          doc.text(40, 163, DataFile.pdfText.batteryItems[props.batteryState.label].description[5]); // description 5
          doc.text(40, 167, DataFile.pdfText.batteryItems[props.batteryState.label].description[6]); // description 6
          doc.text(40, 171, DataFile.pdfText.batteryItems[props.batteryState.label].description[7]); // description 7
          doc.text(40, 175, DataFile.pdfText.batteryItems[props.batteryState.label].description[8]); // description 8
        }

        doc.text(21, 183, "4"); // line ID
        {
          doc.text(27, 183, " "); // item number
          doc.text(141, 183, " "); // quantity
          doc.text(149, 183, " "); // price, per
          doc.text(174, 183, " "); // price, extended

          doc.text(40, 183, "Empty line item"); // description 0
          doc.text(40, 187, " "); // description 1
          doc.text(40, 191, " "); // description 2
          doc.text(40, 195, " "); // description 3
          doc.text(40, 199, " "); // description 4
          doc.text(40, 203, " "); // description 5
          doc.text(40, 207, " "); // description 6
          doc.text(40, 211, " "); // description 7
          doc.text(40, 215, " "); // description 8
        }

        doc.text(21, 223, "5"); // line ID
        {
          doc.text(27, 223, " "); // item number
          doc.text(141, 223, " "); // quantity
          doc.text(149, 223, " "); // price, per
          doc.text(174, 223, " "); // price, quantity

          doc.text(40, 223, "Empty line item"); // description 0
          doc.text(40, 227, " "); // description 1
          doc.text(40, 231, " "); // description 2
          doc.text(40, 235, " "); // description 3
          doc.text(40, 239, " "); // description 4
          doc.text(40, 243, " "); // description 5
          doc.text(40, 247, " "); // description 6
          doc.text(40, 251, " "); // description 7
          doc.text(40, 255, " "); // description 8
        }
      }

      // page 2 -------------------------------------------------------------------------
      // page 2 - computer
      {
        doc.setPage(2);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Computer");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "6"); // line ID
        {
          doc.text(27, 63, "042000"); // item number
          doc.text(141, 63, "1"); // quantity
          for (let i = 0; i < DataComputer.computers.length; i++) {
            if (DataComputer.computers[i].label == props.computerState.label) {
              doc.text(149, 63, "$" + String(DataComputer.computers[i].price)); // price, per
              doc.text(174, 63, "$" + String(DataComputer.computers[i].price)); // price, extended
            }
          }
          doc.text(40, 63, DataComputer.pdfText.computers[props.computerState.label].description[0]); // description 0
          doc.text(40, 67, DataComputer.pdfText.computers[props.computerState.label].description[1]); // description 1
          doc.text(40, 71, DataComputer.pdfText.computers[props.computerState.label].description[2]); // description 2
          doc.text(40, 75, DataComputer.pdfText.computers[props.computerState.label].description[3]); // description 3
          doc.text(40, 79, DataComputer.pdfText.computers[props.computerState.label].description[4]); // description 4
          doc.text(40, 83, DataComputer.pdfText.computers[props.computerState.label].description[5]); // description 5
          doc.text(40, 87, DataComputer.pdfText.computers[props.computerState.label].description[6]); // description 6
          doc.text(40, 91, DataComputer.pdfText.computers[props.computerState.label].description[7]); // description 7
          doc.text(40, 95, DataComputer.pdfText.computers[props.computerState.label].description[8]); // description 8
        }

        doc.text(21, 103, "7"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            doc.text(27, 103, "042000"); // item number
            doc.text(141, 103, "1"); // quantity
            for (let i = 0; i < DataComputer.processors.length; i++) {
              if (DataComputer.processors[i].label == props.processorState.label) {
                doc.text(149, 103, "$" + String(DataComputer.processors[i].price)); // price, per
                doc.text(174, 103, "$" + String(DataComputer.processors[i].price)); // price, extended
              }
            }
            doc.text(40, 103, DataComputer.pdfText.processors[props.processorState.label].description[0]); // description 0
            doc.text(40, 107, DataComputer.pdfText.processors[props.processorState.label].description[1]); // description 1
            doc.text(40, 111, DataComputer.pdfText.processors[props.processorState.label].description[2]); // description 2
            doc.text(40, 115, DataComputer.pdfText.processors[props.processorState.label].description[3]); // description 3
            doc.text(40, 119, DataComputer.pdfText.processors[props.processorState.label].description[4]); // description 4
            doc.text(40, 123, DataComputer.pdfText.processors[props.processorState.label].description[5]); // description 5
            doc.text(40, 127, DataComputer.pdfText.processors[props.processorState.label].description[6]); // description 6
            doc.text(40, 131, DataComputer.pdfText.processors[props.processorState.label].description[7]); // description 7
            doc.text(40, 135, DataComputer.pdfText.processors[props.processorState.label].description[8]); // description 8
          } else {
            doc.text(40, 103, "Empty line item"); // description 0
          }
        }

        doc.text(21, 143, "8"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            doc.text(27, 143, "042000"); // item number
            doc.text(141, 143, "1"); // quantity
            for (let i = 0; i < DataComputer.ram.length; i++) {
              if (DataComputer.ram[i].label == props.ramState.label) {
                doc.text(149, 143, "$" + String(DataComputer.ram[i].price)); // price, per
                doc.text(174, 143, "$" + String(DataComputer.ram[i].price)); // price, extended
              }
            }
            doc.text(40, 143, DataComputer.pdfText.ram[props.ramState.label].description[0]); // description 0
            doc.text(40, 147, DataComputer.pdfText.ram[props.ramState.label].description[1]); // description 1
            doc.text(40, 151, DataComputer.pdfText.ram[props.ramState.label].description[2]); // description 2
            doc.text(40, 155, DataComputer.pdfText.ram[props.ramState.label].description[3]); // description 3
            doc.text(40, 159, DataComputer.pdfText.ram[props.ramState.label].description[4]); // description 4
            doc.text(40, 163, DataComputer.pdfText.ram[props.ramState.label].description[5]); // description 5
            doc.text(40, 167, DataComputer.pdfText.ram[props.ramState.label].description[6]); // description 6
            doc.text(40, 171, DataComputer.pdfText.ram[props.ramState.label].description[7]); // description 7
            doc.text(40, 175, DataComputer.pdfText.ram[props.ramState.label].description[8]); // description 8
          } else {
            doc.text(40, 143, "Empty line item"); // description 0
          }
        }

        doc.text(21, 183, "9"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            doc.text(27, 183, "042000"); // item number
            doc.text(141, 183, "1"); // quantity
            for (let i = 0; i < DataComputer.storage.length; i++) {
              if (DataComputer.storage[i].label == props.storageState.label) {
                doc.text(149, 183, "$" + String(DataComputer.storage[i].price)); // price, per
                doc.text(174, 183, "$" + String(DataComputer.storage[i].price)); // price, extended
              }
            }
            doc.text(40, 183, DataComputer.pdfText.storage[props.storageState.label].description[0]); // description 0
            doc.text(40, 187, DataComputer.pdfText.storage[props.storageState.label].description[1]); // description 1
            doc.text(40, 191, DataComputer.pdfText.storage[props.storageState.label].description[2]); // description 2
            doc.text(40, 195, DataComputer.pdfText.storage[props.storageState.label].description[3]); // description 3
            doc.text(40, 199, DataComputer.pdfText.storage[props.storageState.label].description[4]); // description 4
            doc.text(40, 203, DataComputer.pdfText.storage[props.storageState.label].description[5]); // description 5
            doc.text(40, 207, DataComputer.pdfText.storage[props.storageState.label].description[6]); // description 6
            doc.text(40, 211, DataComputer.pdfText.storage[props.storageState.label].description[7]); // description 7
            doc.text(40, 215, DataComputer.pdfText.storage[props.storageState.label].description[8]); // description 8
          } else {
            doc.text(40, 183, "Empty line item"); // description 0
          }
        }

        doc.text(21, 223, "10"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            doc.text(27, 223, "042000"); // item number
            doc.text(141, 223, "1"); // quantity
            for (let i = 0; i < DataComputer.gpu.length; i++) {
              if (DataComputer.gpu[i].label == props.gpuState.label) {
                doc.text(149, 223, "$" + String(DataComputer.gpu[i].price)); // price, per
                doc.text(174, 223, "$" + String(DataComputer.gpu[i].price)); // price, extended
              }
            }
            doc.text(40, 223, DataComputer.pdfText.gpu[props.gpuState.label].description[0]); // description 0
            doc.text(40, 227, DataComputer.pdfText.gpu[props.gpuState.label].description[1]); // description 1
            doc.text(40, 231, DataComputer.pdfText.gpu[props.gpuState.label].description[2]); // description 2
            doc.text(40, 235, DataComputer.pdfText.gpu[props.gpuState.label].description[3]); // description 3
            doc.text(40, 239, DataComputer.pdfText.gpu[props.gpuState.label].description[4]); // description 4
            doc.text(40, 243, DataComputer.pdfText.gpu[props.gpuState.label].description[5]); // description 5
            doc.text(40, 247, DataComputer.pdfText.gpu[props.gpuState.label].description[6]); // description 6
            doc.text(40, 251, DataComputer.pdfText.gpu[props.gpuState.label].description[7]); // description 7
            doc.text(40, 255, DataComputer.pdfText.gpu[props.gpuState.label].description[8]); // description 8
          } else {
            doc.text(40, 223, "Empty line item"); // description 0
          }
        }
      }

      // page 3 -------------------------------------------------------------------------
      // page 3 - attachments
      {
        doc.setPage(3);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "11"); // line ID
        {
          doc.text(27, 63, " "); // item number
          doc.text(141, 63, ""); // quantity
          doc.text(149, 63, " "); // price, per
          doc.text(174, 63, " "); // price, extended

          doc.text(40, 63, " "); // description 0
          doc.text(40, 67, " "); // description 1
          doc.text(40, 71, " "); // description 2
          doc.text(40, 75, " "); // description 3
          doc.text(40, 79, " "); // description 4
          doc.text(40, 83, " "); // description 5
          doc.text(40, 87, " "); // description 6
          doc.text(40, 91, " "); // description 7
          doc.text(40, 95, " "); // description 8
        }

        doc.text(21, 103, "12"); // line ID
        {
          doc.text(27, 103, " "); // item number
          doc.text(141, 103, " "); // quantity
          doc.text(149, 103, " "); // price, per
          doc.text(174, 103, " "); // price, extended

          doc.text(40, 103, " "); // description 0
          doc.text(40, 107, " "); // description 1
          doc.text(40, 111, " "); // description 2
          doc.text(40, 115, " "); // description 3
          doc.text(40, 119, " "); // description 4
          doc.text(40, 123, " "); // description 5
          doc.text(40, 127, " "); // description 6
          doc.text(40, 131, " "); // description 7
          doc.text(40, 135, " "); // description 8
        }

        doc.text(21, 143, "13"); // line ID
        {
          doc.text(27, 143, " "); // item number
          doc.text(141, 143, " "); // quantity
          doc.text(149, 143, " "); // price, per
          doc.text(174, 143, " "); // price, extended

          doc.text(40, 143, " "); // description 0
          doc.text(40, 147, " "); // description 1
          doc.text(40, 151, " "); // description 2
          doc.text(40, 155, " "); // description 3
          doc.text(40, 159, " "); // description 4
          doc.text(40, 163, " "); // description 5
          doc.text(40, 167, " "); // description 6
          doc.text(40, 171, " "); // description 7
          doc.text(40, 175, " "); // description 8
        }

        doc.text(21, 183, "14"); // line ID
        {
          doc.text(27, 183, " "); // item number
          doc.text(141, 183, " "); // quantity
          doc.text(149, 183, " "); // price, per
          doc.text(174, 183, " "); // price, extended

          doc.text(40, 183, " "); // description 0
          doc.text(40, 187, " "); // description 1
          doc.text(40, 191, " "); // description 2
          doc.text(40, 195, " "); // description 3
          doc.text(40, 199, " "); // description 4
          doc.text(40, 203, " "); // description 5
          doc.text(40, 207, " "); // description 6
          doc.text(40, 211, " "); // description 7
          doc.text(40, 215, " "); // description 8
        }

        doc.text(21, 223, "15"); // line ID
        {
          doc.text(27, 223, " "); // item number
          doc.text(141, 223, " "); // quantity
          doc.text(149, 223, " "); // price, per
          doc.text(174, 223, " "); // price, extended

          doc.text(40, 223, " "); // description 0
          doc.text(40, 227, " "); // description 1
          doc.text(40, 231, " "); // description 2
          doc.text(40, 235, " "); // description 3
          doc.text(40, 239, " "); // description 4
          doc.text(40, 243, " "); // description 5
          doc.text(40, 247, " "); // description 6
          doc.text(40, 251, " "); // description 7
          doc.text(40, 255, " "); // description 8
        }
      }

      // page 4 -------------------------------------------------------------------------
      // page 4 - attachments
      {
        doc.setPage(4);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "16"); // line ID
        {
          doc.text(27, 63, " "); // item number
          doc.text(141, 63, ""); // quantity
          doc.text(149, 63, " "); // price, per
          doc.text(174, 63, " "); // price, extended

          doc.text(40, 63, " "); // description 0
          doc.text(40, 67, " "); // description 1
          doc.text(40, 71, " "); // description 2
          doc.text(40, 75, " "); // description 3
          doc.text(40, 79, " "); // description 4
          doc.text(40, 83, " "); // description 5
          doc.text(40, 87, " "); // description 6
          doc.text(40, 91, " "); // description 7
          doc.text(40, 95, " "); // description 8
        }

        doc.text(21, 103, "17"); // line ID
        {
          doc.text(27, 103, " "); // item number
          doc.text(141, 103, " "); // quantity
          doc.text(149, 103, " "); // price, per
          doc.text(174, 103, " "); // price, extended

          doc.text(40, 103, " "); // description 0
          doc.text(40, 107, " "); // description 1
          doc.text(40, 111, " "); // description 2
          doc.text(40, 115, " "); // description 3
          doc.text(40, 119, " "); // description 4
          doc.text(40, 123, " "); // description 5
          doc.text(40, 127, " "); // description 6
          doc.text(40, 131, " "); // description 7
          doc.text(40, 135, " "); // description 8
        }

        doc.text(21, 143, "18"); // line ID
        {
          doc.text(27, 143, " "); // item number
          doc.text(141, 143, " "); // quantity
          doc.text(149, 143, " "); // price, per
          doc.text(174, 143, " "); // price, extended

          doc.text(40, 143, " "); // description 0
          doc.text(40, 147, " "); // description 1
          doc.text(40, 151, " "); // description 2
          doc.text(40, 155, " "); // description 3
          doc.text(40, 159, " "); // description 4
          doc.text(40, 163, " "); // description 5
          doc.text(40, 167, " "); // description 6
          doc.text(40, 171, " "); // description 7
          doc.text(40, 175, " "); // description 8
        }

        doc.text(21, 183, "19"); // line ID
        {
          doc.text(27, 183, " "); // item number
          doc.text(141, 183, " "); // quantity
          doc.text(149, 183, " "); // price, per
          doc.text(174, 183, " "); // price, extended

          doc.text(40, 183, " "); // description 0
          doc.text(40, 187, " "); // description 1
          doc.text(40, 191, " "); // description 2
          doc.text(40, 195, " "); // description 3
          doc.text(40, 199, " "); // description 4
          doc.text(40, 203, " "); // description 5
          doc.text(40, 207, " "); // description 6
          doc.text(40, 211, " "); // description 7
          doc.text(40, 215, " "); // description 8
        }

        doc.text(21, 223, "20"); // line ID
        {
          doc.text(27, 223, " "); // item number
          doc.text(141, 223, " "); // quantity
          doc.text(149, 223, " "); // price, per
          doc.text(174, 223, " "); // price, extended

          doc.text(40, 223, " "); // description 0
          doc.text(40, 227, " "); // description 1
          doc.text(40, 231, " "); // description 2
          doc.text(40, 235, " "); // description 3
          doc.text(40, 239, " "); // description 4
          doc.text(40, 243, " "); // description 5
          doc.text(40, 247, " "); // description 6
          doc.text(40, 251, " "); // description 7
          doc.text(40, 255, " "); // description 8
        }
      }

      // page 5 ---------------------------------------------------------------------
      {
        doc.setPage(5);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "21"); // line ID
        {
          doc.text(27, 63, " "); // item number
          doc.text(141, 63, ""); // quantity
          doc.text(149, 63, " "); // price, per
          doc.text(174, 63, " "); // price, extended

          doc.text(40, 63, " "); // description 0
          doc.text(40, 67, " "); // description 1
          doc.text(40, 71, " "); // description 2
          doc.text(40, 75, " "); // description 3
          doc.text(40, 79, " "); // description 4
          doc.text(40, 83, " "); // description 5
          doc.text(40, 87, " "); // description 6
          doc.text(40, 91, " "); // description 7
          doc.text(40, 95, " "); // description 8
        }

        doc.text(21, 103, "22"); // line ID
        {
          doc.text(27, 103, " "); // item number
          doc.text(141, 103, " "); // quantity
          doc.text(149, 103, " "); // price, per
          doc.text(174, 103, " "); // price, extended

          doc.text(40, 103, " "); // description 0
          doc.text(40, 107, " "); // description 1
          doc.text(40, 111, " "); // description 2
          doc.text(40, 115, " "); // description 3
          doc.text(40, 119, " "); // description 4
          doc.text(40, 123, " "); // description 5
          doc.text(40, 127, " "); // description 6
          doc.text(40, 131, " "); // description 7
          doc.text(40, 135, " "); // description 8
        }

        doc.text(21, 143, "23"); // line ID
        {
          doc.text(27, 143, " "); // item number
          doc.text(141, 143, " "); // quantity
          doc.text(149, 143, " "); // price, per
          doc.text(174, 143, " "); // price, extended

          doc.text(40, 143, " "); // description 0
          doc.text(40, 147, " "); // description 1
          doc.text(40, 151, " "); // description 2
          doc.text(40, 155, " "); // description 3
          doc.text(40, 159, " "); // description 4
          doc.text(40, 163, " "); // description 5
          doc.text(40, 167, " "); // description 6
          doc.text(40, 171, " "); // description 7
          doc.text(40, 175, " "); // description 8
        }

        doc.text(21, 183, "24"); // line ID
        {
          doc.text(27, 183, " "); // item number
          doc.text(141, 183, " "); // quantity
          doc.text(149, 183, " "); // price, per
          doc.text(174, 183, " "); // price, extended

          doc.text(40, 183, " "); // description 0
          doc.text(40, 187, " "); // description 1
          doc.text(40, 191, " "); // description 2
          doc.text(40, 195, " "); // description 3
          doc.text(40, 199, " "); // description 4
          doc.text(40, 203, " "); // description 5
          doc.text(40, 207, " "); // description 6
          doc.text(40, 211, " "); // description 7
          doc.text(40, 215, " "); // description 8
        }

        doc.text(21, 223, "25"); // line ID
        {
          doc.text(27, 223, " "); // item number
          doc.text(141, 223, " "); // quantity
          doc.text(149, 223, " "); // price, per
          doc.text(174, 223, " "); // price, extended

          doc.text(40, 223, " "); // description 0
          doc.text(40, 227, " "); // description 1
          doc.text(40, 231, " "); // description 2
          doc.text(40, 235, " "); // description 3
          doc.text(40, 239, " "); // description 4
          doc.text(40, 243, " "); // description 5
          doc.text(40, 247, " "); // description 6
          doc.text(40, 251, " "); // description 7
          doc.text(40, 255, " "); // description 8
        }
      }

      // page 6 ---------------------------------------------------------------------
      {
        doc.setPage(6);

        // total price
        doc.setFontSize(12);
        doc.text(149, 190, "Total");
        doc.text(174, 190, "$" + Price(props.statesArray).toString());

        // horizontal lines above and below the total price
        doc.line(20, 185, 200, 185);
        doc.line(20, 192, 200, 192);

        // legal stuff
        doc.setFontSize(8);
        doc.text(21, 200, "1) 50% payable upon signed quote, 50% Due Net 30 Days OAC upon Delivery (Credit preapproved).");
        doc.text(21, 204, "2) All prices are in American Dollars. All payments due in American Dollars.");
        doc.text(
          21,
          208,
          "3) Estimated time to ship " +  Leadtime(props.statesArray).toString() + " weeks after receipt of order (ARO), and receipt of acceptable End Use Certificate, if required."
        );
        doc.text(24.5, 212, "Subject to 3rd party component availability and length of work queue at time of receipt of P.O.");
        doc.text(
          21,
          216,
          "4) Clearpath Robotics Inc. Terms and Conditions of Sale apply to this quotation and govern the legal relationship between Buyer and Seller."
        );
        doc.text(24.5, 220, "Terms and Conditions are located at this link");
        doc.text(
          21,
          224,
          "5) Unless otherwise specified, price does not include any applicable duties, taxes, or any import/export related costs for which the Buyer is"
        );
        doc.text(24.5, 228, "solely responsible.");
        doc.text(21, 232, "6) A 3% processing fee will be added to all credit card purchases over USD $5,000");
        doc.text(21, 236, "7) HST or GST will be charged to all Canadian customers over and above the costs shown in this quote.");
        doc.text(
          21,
          240,
          "8) We reserve the right to cancel your Purchase Order without liability in the event that an Export Permit (if required) is not granted or"
        );
        doc.text(24.5, 244, "is revoked.");
        doc.text(
          21,
          248,
          "9) Destination of Goods will be the address shown on the face of this Quotation. Diversion, re-direction, or re-shipment of Goods by Buyer"
        );
        doc.text(24.5, 252, "contrary to U.S. and Canadian Export Control laws is prohibited.");

        // signature section
        doc.setFillColor(206, 206, 206);
        doc.rect(20, 255, 180, 26, "FD");
        doc.text(27, 260, "Agreed to and accepted by:");
        doc.text(80, 268, "Authorized Signature");
        doc.line(80, 265, 140, 265);
        doc.text(149, 268, "Date");
        doc.line(149, 265, 189, 265);
        doc.text(80, 278, "Print Name");
        doc.line(80, 275, 140, 275);
        doc.text(149, 278, "Title");
        doc.line(149, 275, 189, 275);
      }
    }

    // save PDF -----------------------------------------------------------------------
    doc.save(quote_name);
  }

  // React DOM
  return (
    <button onClick={GeneratePdfQuote} className="hover:text-yellow-400">
      Download Quote
    </button>
  );
}

export default ButtonQuote;
