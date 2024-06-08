import React from "react";
import "./style.css";

const PhDPage = () => {
  return (
    <div className="ContactItem">
      <h2> My PhD </h2>
      <hr />
      <p>
        <strong>
          Title: Development of a haemodynamic model system to examine the effects of pressure and strain on human
          endothelial cells
        </strong>
      </p>
      <p>Supervisors: Dr Jackie Whatmore, Prof. Angela Shore, Dr Kim Gooding & Prof. Sir John Tooke.</p>
      <p>
        Diabetes is commonly associated with chronic hypertension and evidence suggests that blood pressure control,
        even in the absence of tight glycemic control, can reduce the risk of diabetic complications in type 1 and type
        2 diabetes. Hypertension is associated with raised capillary pressure which could provide a link between high
        blood pressure and the development of diabetic vascular complications in small blood vessels. Long term changes
        include stiffening of the blood vessels and, as a result, the cells feel less cyclic strain for a given luminal
        pressure. This leads to the question; is it altered pressure or strain that is important in reducing the risk of
        diabetic complications?{" "}
      </p>

      <p>
        Many existing models for exposing endothelial cells to mechanical forces in an in-vitro environment alter
        pressure and strain simultaneously, making it impossible to distinguish between the effects of the two
        potentially independent stimuli. This distinction is particularly relevant when examining the interaction of
        haemodynamic forces on microvascular endothelial cells, which are exposed to low hydrostatic pressure but
        significant strains.{" "}
      </p>

      <p>
        Part one describes the development of a haemodynamic model system that can eval- uate independently the impact
        of pressure (15 to 35mmHg) and strain (0 to 10%), com- mensurate with the microvasculature on microvascular
        endothelial cell function. A perfusion model was developed which allows accurate recording of pressures
        generated inside the system. A method for applying a continuous sinusoidal cyclical strain of 5-10% is discussed
        and the model is validated under these conditions for 48 hour periods. Part one also examines the growth and
        attachment of human endothelial cells in compliant tubing and presents a method for obtaining a confluent layer
        of cells in the tubing.{" "}
      </p>

      <img src="/setup.png" alt="lab setup" width="375" height="275" />
      <img src="/modelsetup.png" alt="lab setup" width="375" height="275" />
      <img src="/cells.png" alt="cells" width="375" height="275" />

      <p>
        Part two describes preliminary in vitro studies on the effect of hydrostatic pressure on microvascular
        endothelial cells and other major environmental factors in type 2 dia- betes, e.g. hyperinsulinaemia on the
        metabolic functions of microvascular and vascular endothelial cells, specifically fatty acid uptake. Preliminary
        studies indicated that chronic physiological insulin exposure inhibited the uptake of free fatty acids in human
        umbili- cal endothelial cells (HUVECs). Furthermore chronic exposure to raised levels of insulin reduced free
        fatty acid uptake further, which is contrary to studies on other cells lines. Ex- tending the study to
        microvascular cells, it was also shown that acute exposure to patho- physiological insulin levels stimulated
        free fatty acid uptake in human brain endothelial cell line (hCMECs).
      </p>

      <p>
        <strong>
          {" "}
          If you want to read my thesis,
          <a href="https://www.dropbox.com/s/jbu4bvurs8ffal5/thesis.pdf?dl=0" target="_blank">
            click here
          </a>{" "}
        </strong>
      </p>
    </div>
  );
};

export default PhDPage;
