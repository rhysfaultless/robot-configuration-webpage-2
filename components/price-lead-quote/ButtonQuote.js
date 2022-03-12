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
const PageCount = 7;

function ButtonQuote(props) {
  function GeneratePdfQuote() {
    // robot data from the Next.js Page
    for (let i = 0; i < DataFiles.length; i++) {
      if (DataFiles[i].robotPlatform.label == props.robotPlatform) {
        const DataFile = DataFiles[i];
      }
    }

    // PDF setup - create PDF -----------------------------------------------------------
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
      doc.text(40, 48, DataFile.robotPlatform.labelPdf + ", Robot Configuration Webpage");

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

    // PDF setup - content for robot configuration --------------------------------------
    {
      // page 1 - robot platform, colour, battery ---------------------------------------
      {
        doc.setPage(1);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Robot Platform, Colour, Battery Chemistry");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "1"); // line ID
        {
          doc.text(27, 63, DataFile.robotPlatform.itemNumber); // item number
          doc.text(141, 63, "1"); // quantity
          doc.text(149, 63, "$" + String(DataFile.robotPlatform.price)); // price, per
          doc.text(174, 63, "$" + String(DataFile.robotPlatform.price)); // price, extended
          doc.text(40, 63, DataFile.robotPlatform.description[0]); // description 0
          doc.text(40, 67, DataFile.robotPlatform.description[1]); // description 1
          doc.text(40, 71, DataFile.robotPlatform.description[2]); // description 2
          doc.text(40, 75, DataFile.robotPlatform.description[3]); // description 3
          doc.text(40, 79, DataFile.robotPlatform.description[4]); // description 4
          doc.text(40, 83, DataFile.robotPlatform.description[5]); // description 5
          doc.text(40, 87, DataFile.robotPlatform.description[6]); // description 6
          doc.text(40, 91, DataFile.robotPlatform.description[7]); // description 7
          doc.text(40, 95, DataFile.robotPlatform.description[8]); // description 8
        }

        doc.text(21, 103, "2"); // line ID
        {
          for (let i = 0; i < DataFile.panelColours.length; i++) {
            if (DataFile.panelColours[i].label == props.colourState.label) {
              doc.text(27, 103, DataFile.panelColours[i].itemNumber); // item number
              doc.text(141, 103, "1"); // quantity
              doc.text(149, 103, "$" + String(DataFile.panelColours[i].price)); // price, per
              doc.text(174, 103, "$" + String(DataFile.panelColours[i].price)); // price, extended
              doc.text(40, 103, DataFile.panelColours[i].description[0]); // description 0
              doc.text(40, 107, DataFile.panelColours[i].description[1]); // description 1
              doc.text(40, 111, DataFile.panelColours[i].description[2]); // description 2
              doc.text(40, 115, DataFile.panelColours[i].description[3]); // description 3
              doc.text(40, 119, DataFile.panelColours[i].description[4]); // description 4
              doc.text(40, 123, DataFile.panelColours[i].description[5]); // description 5
              doc.text(40, 127, DataFile.panelColours[i].description[6]); // description 6
              doc.text(40, 131, DataFile.panelColours[i].description[7]); // description 7
              doc.text(40, 135, DataFile.panelColours[i].description[8]); // description 8
            }
          }
        }

        doc.text(21, 143, "3"); // line ID
        {
          doc.text(27, 143, "042000"); // item number
          doc.text(141, 143, "1"); // quantity
          for (let i = 0; i < DataFile.batteryItems.length; i++) {
            if (DataFile.batteryItems[i].label == props.batteryState.label) {
              doc.text(149, 143, "$" + String(DataFile.batteryItems[i].price)); // price, per
              doc.text(174, 143, "$" + String(DataFile.batteryItems[i].price)); // price, extended
              doc.text(40, 143, DataFile.batteryItems[i].description[0]); // description 0
              doc.text(40, 147, DataFile.batteryItems[i].description[1]); // description 1
              doc.text(40, 151, DataFile.batteryItems[i].description[2]); // description 2
              doc.text(40, 155, DataFile.batteryItems[i].description[3]); // description 3
              doc.text(40, 159, DataFile.batteryItems[i].description[4]); // description 4
              doc.text(40, 163, DataFile.batteryItems[i].description[5]); // description 5
              doc.text(40, 167, DataFile.batteryItems[i].description[6]); // description 6
              doc.text(40, 171, DataFile.batteryItems[i].description[7]); // description 7
              doc.text(40, 175, DataFile.batteryItems[i].description[8]); // description 8
            }
          }
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

      // page 2 - computer --------------------------------------------------------------
      {
        doc.setPage(2);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Computer");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "6"); // line ID
        {
          for (let i = 0; i < DataComputer.computers.length; i++) {
            if (DataComputer.computers[i].label == props.computerState.label) {
              doc.text(27, 63, DataComputer.computers[i].itemNumber); // item number
              if (DataComputer.computers[i].price != 0) {
                doc.text(141, 63, "1"); // quantity
                doc.text(149, 63, "$" + String(DataComputer.computers[i].price)); // price, per
                doc.text(174, 63, "$" + String(DataComputer.computers[i].price)); // price, extended
              }
              doc.text(40, 63, DataComputer.computers[i].description[0]); // description 0
              doc.text(40, 67, DataComputer.computers[i].description[1]); // description 1
              doc.text(40, 71, DataComputer.computers[i].description[2]); // description 2
              doc.text(40, 75, DataComputer.computers[i].description[3]); // description 3
              doc.text(40, 79, DataComputer.computers[i].description[4]); // description 4
              doc.text(40, 83, DataComputer.computers[i].description[5]); // description 5
              doc.text(40, 87, DataComputer.computers[i].description[6]); // description 6
              doc.text(40, 91, DataComputer.computers[i].description[7]); // description 7
              doc.text(40, 95, DataComputer.computers[i].description[8]); // description 8
            }
          }
        }

        doc.text(21, 103, "7"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            for (let i = 0; i < DataComputer.processors.length; i++) {
              if (DataComputer.processors[i].label == props.processorState.label) {
                doc.text(27, 103, DataComputer.processors[i].itemNumber); // item number
                if (DataComputer.processors[i].price != 0) {
                  doc.text(141, 103, "1"); // quantity
                  doc.text(149, 103, "$" + String(DataComputer.processors[i].price)); // price, per
                  doc.text(174, 103, "$" + String(DataComputer.processors[i].price)); // price, extended
                }
                doc.text(40, 103, DataComputer.processors[i].description[0]); // description 0
                doc.text(40, 107, DataComputer.processors[i].description[1]); // description 1
                doc.text(40, 111, DataComputer.processors[i].description[2]); // description 2
                doc.text(40, 115, DataComputer.processors[i].description[3]); // description 3
                doc.text(40, 119, DataComputer.processors[i].description[4]); // description 4
                doc.text(40, 123, DataComputer.processors[i].description[5]); // description 5
                doc.text(40, 127, DataComputer.processors[i].description[6]); // description 6
                doc.text(40, 131, DataComputer.processors[i].description[7]); // description 7
                doc.text(40, 135, DataComputer.processors[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 103, "Empty line item"); // description 0
          }
        }

        doc.text(21, 143, "8"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            for (let i = 0; i < DataComputer.ram.length; i++) {
              if (DataComputer.ram[i].label == props.ramState.label) {
                doc.text(27, 143, DataComputer.ram[i].itemNumber); // item number
                if (DataComputer.ram[i].price != 0) {
                  doc.text(141, 143, "1"); // quantity
                  doc.text(149, 143, "$" + String(DataComputer.ram[i].price)); // price, per
                  doc.text(174, 143, "$" + String(DataComputer.ram[i].price)); // price, extended
                }
                doc.text(40, 143, DataComputer.ram[i].description[0]); // description 0
                doc.text(40, 147, DataComputer.ram[i].description[1]); // description 1
                doc.text(40, 151, DataComputer.ram[i].description[2]); // description 2
                doc.text(40, 155, DataComputer.ram[i].description[3]); // description 3
                doc.text(40, 159, DataComputer.ram[i].description[4]); // description 4
                doc.text(40, 163, DataComputer.ram[i].description[5]); // description 5
                doc.text(40, 167, DataComputer.ram[i].description[6]); // description 6
                doc.text(40, 171, DataComputer.ram[i].description[7]); // description 7
                doc.text(40, 175, DataComputer.ram[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 143, "Empty line item"); // description 0
          }
        }

        doc.text(21, 183, "9"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            for (let i = 0; i < DataComputer.storage.length; i++) {
              if (DataComputer.storage[i].label == props.storageState.label) {
                doc.text(27, 183, DataComputer.storage[i].itemNumber); // item number
                if (DataComputer.storage[i].price != 0) {
                  doc.text(141, 183, "1"); // quantity
                  doc.text(149, 183, "$" + String(DataComputer.storage[i].price)); // price, per
                  doc.text(174, 183, "$" + String(DataComputer.storage[i].price)); // price, extended
                }
                doc.text(40, 183, DataComputer.storage[i].description[0]); // description 0
                doc.text(40, 187, DataComputer.storage[i].description[1]); // description 1
                doc.text(40, 191, DataComputer.storage[i].description[2]); // description 2
                doc.text(40, 195, DataComputer.storage[i].description[3]); // description 3
                doc.text(40, 199, DataComputer.storage[i].description[4]); // description 4
                doc.text(40, 203, DataComputer.storage[i].description[5]); // description 5
                doc.text(40, 207, DataComputer.storage[i].description[6]); // description 6
                doc.text(40, 211, DataComputer.storage[i].description[7]); // description 7
                doc.text(40, 215, DataComputer.storage[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 183, "Empty line item"); // description 0
          }
        }

        doc.text(21, 223, "10"); // line ID
        {
          if (props.computerState.configurableComputerBool) {
            for (let i = 0; i < DataComputer.gpu.length; i++) {
              if (DataComputer.gpu[i].label == props.gpuState.label) {
                doc.text(27, 223, DataComputer.gpu[i].itemNumber); // item number
                if (DataComputer.gpu[i].price != 0) {
                  doc.text(141, 223, "1"); // quantity
                  doc.text(149, 223, "$" + String(DataComputer.gpu[i].price)); // price, per
                  doc.text(174, 223, "$" + String(DataComputer.gpu[i].price)); // price, extended
                }
                doc.text(40, 223, DataComputer.gpu[i].description[0]); // description 0
                doc.text(40, 227, DataComputer.gpu[i].description[1]); // description 1
                doc.text(40, 231, DataComputer.gpu[i].description[2]); // description 2
                doc.text(40, 235, DataComputer.gpu[i].description[3]); // description 3
                doc.text(40, 239, DataComputer.gpu[i].description[4]); // description 4
                doc.text(40, 243, DataComputer.gpu[i].description[5]); // description 5
                doc.text(40, 247, DataComputer.gpu[i].description[6]); // description 6
                doc.text(40, 251, DataComputer.gpu[i].description[7]); // description 7
                doc.text(40, 255, DataComputer.gpu[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 223, "Empty line item"); // description 0
          }
        }
      }

      // page 3 - kits ------------------------------------------------------------------
      {
        doc.setPage(3);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Kits");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "11"); // line ID
        {
          for (let i = 0; i < DataFile.kits.length; i++) {
            if (DataFile.kits[i].label == props.kitState.label) {
              if (DataFile.kits[i].bool) {
                doc.text(27, 63, DataFile.kits[i].itemNumber); // item number
                doc.text(141, 63, "1"); // quantity
                doc.text(149, 63, "$" + String(DataFile.kits[i].priceHardware)); // price, per
                doc.text(174, 63, "$" + String(DataFile.kits[i].priceHardware)); // price, extended
                doc.text(40, 63, DataFile.kits[i].descriptionHardware[0]); // description 0
                doc.text(40, 67, DataFile.kits[i].descriptionHardware[1]); // description 1
                doc.text(40, 71, DataFile.kits[i].descriptionHardware[2]); // description 2
                doc.text(40, 75, DataFile.kits[i].descriptionHardware[3]); // description 3
                doc.text(40, 79, DataFile.kits[i].descriptionHardware[4]); // description 4
                doc.text(40, 83, DataFile.kits[i].descriptionHardware[5]); // description 5
                doc.text(40, 87, DataFile.kits[i].descriptionHardware[6]); // description 6
                doc.text(40, 91, DataFile.kits[i].descriptionHardware[7]); // description 7
                doc.text(40, 95, DataFile.kits[i].descriptionHardware[8]); // description 8
              } else {
                doc.text(40, 63, "Empty line item"); // description 0
              }
            }
          }
        }

        doc.text(21, 103, "12"); // line ID
        {
          for (let i = 0; i < DataFile.kits.length; i++) {
            if (DataFile.kits[i].label == props.kitState.label) {
              if (DataFile.kits[i].bool) {
                doc.text(27, 103, DataFile.kits[i].itemNumber); // item number
                doc.text(141, 103, "1"); // quantity
                doc.text(149, 103, "$" + String(DataFile.kits[i].priceSoftware)); // price, per
                doc.text(174, 103, "$" + String(DataFile.kits[i].priceSoftware)); // price, extended
                doc.text(40, 103, DataFile.kits[i].descriptionSoftware[0]); // description 0
                doc.text(40, 107, DataFile.kits[i].descriptionSoftware[1]); // description 1
                doc.text(40, 111, DataFile.kits[i].descriptionSoftware[2]); // description 2
                doc.text(40, 115, DataFile.kits[i].descriptionSoftware[3]); // description 3
                doc.text(40, 119, DataFile.kits[i].descriptionSoftware[4]); // description 4
                doc.text(40, 123, DataFile.kits[i].descriptionSoftware[5]); // description 5
                doc.text(40, 127, DataFile.kits[i].descriptionSoftware[6]); // description 6
                doc.text(40, 131, DataFile.kits[i].descriptionSoftware[7]); // description 7
                doc.text(40, 135, DataFile.kits[i].descriptionSoftware[8]); // description 8
              } else {
                doc.text(40, 103, "Empty line item"); // description 0
              }
            }
          }
        }

        doc.text(21, 143, "13"); // line ID
        {
          doc.text(40, 143, "Empty line item"); // description 0
        }

        doc.text(21, 183, "14"); // line ID
        {
          doc.text(40, 183, "Empty line item"); // description 0
        }

        doc.text(21, 223, "15"); // line ID
        {
          doc.text(40, 223, "Empty line item"); // description 0
        }
      }

      // page 4 - attachments -----------------------------------------------------------
      {
        doc.setPage(4);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "16"); // line ID
        {
          for (let i = 0; i < DataFile.integrationRiser.length; i++) {
            if (DataFile.integrationRiser[i].label == props.integrationRiserState.label) {
              doc.text(27, 63, DataFile.integrationRiser[i].itemNumber); // item number
              if (DataFile.integrationRiser[i].price != 0) {
                doc.text(141, 63, "1"); // quantity
                doc.text(149, 63, "$" + String(DataFile.integrationRiser[i].price)); // price, per
                doc.text(174, 63, "$" + String(DataFile.integrationRiser[i].price)); // price, extended
              }
              doc.text(40, 63, "Attachments - Integration Riser Bracket"); // description 0
              doc.text(40, 67, DataFile.integrationRiser[i].description[1]); // description 1
              doc.text(40, 71, DataFile.integrationRiser[i].description[2]); // description 2
              doc.text(40, 75, DataFile.integrationRiser[i].description[3]); // description 3
              doc.text(40, 79, DataFile.integrationRiser[i].description[4]); // description 4
              doc.text(40, 83, DataFile.integrationRiser[i].description[5]); // description 5
              doc.text(40, 87, DataFile.integrationRiser[i].description[6]); // description 6
              doc.text(40, 91, DataFile.integrationRiser[i].description[7]); // description 7
              doc.text(40, 95, DataFile.integrationRiser[i].description[8]); // description 8
            }
          }
        }

        doc.text(21, 103, "17"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[0].bool && props.kitState.attachmentPosition[0].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[0][0].label) {
                doc.text(27, 103, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 103, "1"); // quantity
                  doc.text(149, 103, "$" + String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 103, "$" + String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 103, "Attachments - Position 1"); // description 0
                doc.text(40, 107, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 111, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 115, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 119, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 123, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 127, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 131, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 135, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 103, "Attachments - Position 1"); // description 0
            doc.text(40, 111, "Empty line item"); // description 2
          }
        }

        doc.text(21, 143, "18"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[1].bool && props.kitState.attachmentPosition[1].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[1][0].label) {
                doc.text(27, 143, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 143, "1"); // quantity
                  doc.text(149, 143, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 143, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 143, "Attachments - Position 2"); // description 0
                doc.text(40, 147, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 151, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 155, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 159, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 163, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 167, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 171, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 175, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 143, "Attachments - Position 2"); // description 0
            doc.text(40, 151, "Empty line item"); // description 2
          }
        }

        doc.text(21, 183, "19"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[2].bool && props.kitState.attachmentPosition[2].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[2][0].label) {
                doc.text(27, 183, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 183, "1"); // quantity
                  doc.text(149, 183, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 183, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 183, "Attachments - Position 3"); // description 0
                doc.text(40, 187, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 191, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 195, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 199, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 203, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 207, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 211, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 215, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 183, "Attachments - Position 3"); // description 0
            doc.text(40, 191, "Empty line item"); // description 2
          }
        }

        doc.text(21, 223, "20"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[3].bool && props.kitState.attachmentPosition[3].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[3][0].label) {
                doc.text(27, 223, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 223, "1"); // quantity
                  doc.text(149, 223, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 223, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 223, "Attachments - Position 4"); // description 0
                doc.text(40, 227, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 231, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 235, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 239, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 243, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 247, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 251, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 255, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 223, "Attachments - Position 4"); // description 0
            doc.text(40, 231, "Empty line item"); // description 2
          }
        }
      }

      // page 5 - attachments -----------------------------------------------------------
      {
        doc.setPage(5);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "21"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[4].bool && props.kitState.attachmentPosition[4].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[4][0].label) {
                doc.text(27, 63, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 63, "1"); // quantity
                  doc.text(149, 63, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 63, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 63, "Attachments - Position 5"); // description 0
                doc.text(40, 67, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 71, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 75, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 79, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 83, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 87, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 91, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 95, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 63, "Attachments - Position 5"); // description 0
            doc.text(40, 71, "Empty line item"); // description 2
          }
        }

        doc.text(21, 103, "22"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[5].bool && props.kitState.attachmentPosition[5].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[5][0].label) {
                doc.text(27, 103, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 103, "1"); // quantity
                  doc.text(149, 103, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 103, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 103, "Attachments - Position 6"); // description 0
                doc.text(40, 107, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 111, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 115, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 119, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 123, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 127, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 131, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 135, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 103, "Attachments - Position 6"); // description 0
            doc.text(40, 111, "Empty line item"); // description 2
          }
        }

        doc.text(21, 143, "23"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[6].bool && props.kitState.attachmentPosition[6].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[6][0].label) {
                doc.text(27, 143, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 143, "1"); // quantity
                  doc.text(149, 143, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 143, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 143, "Attachments - Position 7"); // description 0
                doc.text(40, 147, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 151, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 155, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 159, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 163, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 167, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 171, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 175, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 143, "Attachments - Position 7"); // description 0
            doc.text(40, 151, "Empty line item"); // description 2
          }
        }

        doc.text(21, 183, "24"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[7].bool && props.kitState.attachmentPosition[7].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              console.log('loop, 2nd');
              if (DataFile.attachmentItems[i].label == props.attachmentStates[7][0].label) {
                doc.text(27, 183, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  console.log('if 4th');
                  doc.text(141, 183, "1"); // quantity
                  doc.text(149, 183, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 183, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 183, "Attachments - Position 8"); // description 0
                doc.text(40, 187, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 191, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 195, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 199, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 203, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 207, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 211, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 215, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 183, "Attachments - Position 8"); // description 0
            doc.text(40, 191, "Empty line item"); // description 2
          }
        }

        doc.text(21, 223, "25"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[8].bool && props.kitState.attachmentPosition[8].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[8][0].label) {
                doc.text(27, 223, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 223, "1"); // quantity
                  doc.text(149, 223, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 223, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 223, "Attachments - Position 9"); // description 0
                doc.text(40, 227, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 231, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 235, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 239, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 243, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 247, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 251, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 255, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 223, "Attachments - Position 9"); // description 0
            doc.text(40, 231, "Empty line item"); // description 2
          }
        }
      }

      // page 6 - attachments -----------------------------------------------------------
      {
        doc.setPage(6);
        doc.setTextColor(255); // make text white
        doc.text(40, 57.5, "Attachments");
        doc.setTextColor(0); // make text black

        doc.text(21, 63, "26"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[9].bool && props.kitState.attachmentPosition[9].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[9][0].label) {
                doc.text(27, 63, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 63, "1"); // quantity
                  doc.text(149, 63, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 63, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 63, "Attachments - Position 10"); // description 0
                doc.text(40, 67, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 71, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 75, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 79, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 83, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 87, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 91, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 95, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 63, "Attachments - Position 10"); // description 0
            doc.text(40, 71, "Empty line item"); // description 2
          }
        }

        doc.text(21, 103, "27"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[10].bool && props.kitState.attachmentPosition[10].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[10][0].label) {
                doc.text(27, 103, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 103, "1"); // quantity
                  doc.text(149, 103, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 103, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 103, "Attachments - Position 11"); // description 0
                doc.text(40, 107, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 111, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 115, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 119, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 123, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 127, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 131, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 135, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 103, "Attachments - Position 11"); // description 0
            doc.text(40, 111, "Empty line item"); // description 2
          }
        }

        doc.text(21, 143, "28"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[11].bool && props.kitState.attachmentPosition[11].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[11][0].label) {
                doc.text(27, 143, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 143, "1"); // quantity
                  doc.text(149, 143, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 143, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 143, "Attachments - Position 12"); // description 0
                doc.text(40, 147, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 151, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 155, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 159, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 163, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 167, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 171, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 175, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 143, "Attachments - Position 12"); // description 0
            doc.text(40, 151, "Empty line item"); // description 2
          }
        }

        doc.text(21, 183, "29"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[12].bool && props.kitState.attachmentPosition[12].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[12][0].label) {
                doc.text(27, 183, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 183, "1"); // quantity
                  doc.text(149, 183, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 183, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 183, "Attachments - Position 13"); // description 0
                doc.text(40, 187, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 191, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 195, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 199, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 203, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 207, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 211, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 215, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 183, "Attachments - Position 13"); // description 0
            doc.text(40, 191, "Empty line item"); // description 2
          }
        }

        doc.text(21, 223, "30"); // line ID
        {
          if (props.integrationRiserState.attachmentPosition[13].bool && props.kitState.attachmentPosition[13].bool) {
            for (let i = 0; i < DataFile.attachmentItems.length; i++) {
              if (DataFile.attachmentItems[i].label == props.attachmentStates[13][0].label) {
                doc.text(27, 223, DataFile.attachmentItems[i].itemNumber); // item number
                if (DataFile.attachmentItems[i].price != 0) {
                  doc.text(141, 223, "1"); // quantity
                  doc.text(149, 223, String(DataFile.attachmentItems[i].price)); // price, per
                  doc.text(174, 223, String(DataFile.attachmentItems[i].price)); // price, extended
                }
                doc.text(40, 223, "Attachments - Position 14"); // description 0
                doc.text(40, 227, DataFile.attachmentItems[i].description[1]); // description 1
                doc.text(40, 231, DataFile.attachmentItems[i].description[2]); // description 2
                doc.text(40, 235, DataFile.attachmentItems[i].description[3]); // description 3
                doc.text(40, 239, DataFile.attachmentItems[i].description[4]); // description 4
                doc.text(40, 243, DataFile.attachmentItems[i].description[5]); // description 5
                doc.text(40, 247, DataFile.attachmentItems[i].description[6]); // description 6
                doc.text(40, 251, DataFile.attachmentItems[i].description[7]); // description 7
                doc.text(40, 255, DataFile.attachmentItems[i].description[8]); // description 8
              }
            }
          } else {
            doc.text(40, 223, "Attachments - Position 14"); // description 0
            doc.text(40, 231, "Empty line item"); // description 2
          }
        }
      }

      // page 7 - summary ---------------------------------------------------------------
      {
        doc.setPage(7);

        // screenshot image of the configured robot
        var screenshotImageData = props.screenshotData;
        if (screenshotImageData != null) {
          const screenshotProperties = doc.getImageProperties(screenshotImageData);
          const screenshotWidth = 140;
          const screenshotAspect = screenshotProperties.height / screenshotProperties.width;
          doc.addImage(screenshotImageData, "JPEG", 40, 60, screenshotWidth, (screenshotWidth * screenshotAspect));
        }

        // total price
        doc.setFontSize(12);
        doc.text(149, 190, "Total");
        doc.text(174, 190, "$" + Price(props.statesArray).toString() + " USD");

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
          "3) Estimated time to ship " +
            Leadtime(props.statesArray).toString() +
            " weeks after receipt of order (ARO), and receipt of acceptable End Use Certificate, if required."
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

    // save PDF
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
