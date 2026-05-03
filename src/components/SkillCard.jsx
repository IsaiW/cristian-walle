/**
 * @copyright 2025 IsaiW_
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, icon, label, desc, classes }) => {
  return (
    <div className={'flex items-center gap-3 ring-1 ring-inset ring-zinc-800 rounded-lg p-3 hover:ring-amber-400/30 hover:bg-zinc-900 transition-all ' + classes}>
      <figure className="bg-zinc-800 rounded-md overflow-hidden w-12 h-12 p-2 shrink-0 flex items-center justify-center">
        {imgSrc
          ? <img src={imgSrc} width={32} height={32} alt={label} />
          : icon
        }
      </figure>
      <div>
        <h3 className="font-medium text-zinc-100">{label}</h3>
        <p className="text-zinc-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
