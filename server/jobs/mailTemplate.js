module.exports = (qoute) => {
    return `<div style="margin-left: 20px;">
                <h3 style="color: black; font-size: 20px; margin-top: 20px;">Dear Kanye Fan,</h3>
                <p style="color: black; font-size: 15px;">The Kanye Quote of the Day is:</p>
                <p style="color: black; text-align: center; font-size: 15px;">
                        <b>${qoute}</b></p>
                <div style="display: flex; justify-content: center;">
                    <img src="cid:oreo@kreata.ee" alt="kanye" style="width: 300px; margin-bottom: 10px;">
                </div>
                <p style="color: black; font-size: 15px;">Kind regards,</p>
                <p style="color: black; font-size: 15px;">The Oreo Project</p>
            </div>`;
};
