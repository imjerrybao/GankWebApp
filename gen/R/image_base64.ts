///<reference path="../../androidui-sdk/android-ui.d.ts"/>
module com.linfaxin.gankwebapp.R {
    import NetImage = androidui.image.NetImage;

    //index=ratio, index-0 alway null, index-3 = @x3
    var data = {
        "icon_github": [
                null,
                null,
                null,
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFEUlEQVR42t1ba2gUVxSOm2yb7BqVGk0o1EJaE63+iIIVHy0KPkpphKLYoAWVllhBFgTr40+ghUCqRMRaCqU0UagUfyaERKtFghGUNlBKiZWqoLaigtRXYtS4/Q6cgel2Zvaee2d27+TH9yM7cx7fl5k7995zbkk2my0pBurr3pwCvMGYUqw8oiaZAJYArcAPQD/wJzAMZHMwzNf6+d5Wtk3ESgAkXA68B3wL3PIgKsUt9kU+y60VAMnVAd8DD0Mg7YeHHKPOGgGQTA3wNfA0QuK5eMoxa4omAIJXAp9H/B9XeSIoh8qCCoCAK4HbRSSeC8plZUEEQKAM8Mwi8g4op0xkAsB5EvjGQuK5oByToQoAh1XAmRiQd0C5VoUiABxNBoZiRN4B5TzZSAA4KAV6Y0jeAeVeaiJAe4zJO2jXEgCGm8cBeQebRQLAYBHwOI/T58DrwAxgKXAQ+LsAZG4Ch4C3gVc5h+d5bIjLIiUB+L1XGfQGfVZ/HwLXIyB+g30nPOIOKg6KpSoCNCsmtC/g9akAWlzT5DHgN6CDf98ObADeYWzg3+jad3zvM9cy+TMgFRBvn2LOzYEC4IY0P2IqzjYqfEJfBt4ivxozzhS/Wq8o3LtR8PqkgwRoETySa4q1i+MhwBpB3i2eAuDCdOCBwNEqiwRYJcibOE73EqBNOChlLBIgI8y9zUuAS0InxywS4Jgw90v/EQA/zNb4LJ2zSIBzGvnPdguwR8PBCosEWKGR/x63AFIFj9hC3iXCEZ0nmAyrFaaSbtxRXWsXWIAqzk2VB3GuJsMmoXK7bSPvEmG3kEsTGe0SGi23WIDlQi67SngVJzGaarEAU4VcDpLRccmKzFbyLhFuCPgcJ4OzAoOeGAjQI+BzlgyuCAw6YiBAh4DPFTIYERh0xUCALgGfETK4JzAYiIEAAwI+98jgssDgYgwEuCjgc5kMzgursUmLySeF1erz0lFzvE2EenQWEfstFmC/dFGnMxUesliAIZ2p8EKNtfR6C8l/oMFjIRmWCTdDs9zOlrSI/AvCCZ2zOVrmOOjTUK/NIgG+0Mi/z70jtFezXLXTAvKfaua+1y1ALZevdBxR2aqsCMTLOLZOzsS1NndbvNugcPkL0FBA8g0cUzffbq+6wGqfmy8Aa7l42ZunQ+wU8H5QIdOA9ETO46cQKs2rvQSY4FMc+cNdoOQG5msKLWu/co/vVmC+pOmZH+8lXPE5Cvxu8Ir+ryhCXP2Ko9t8jIjwAtd9M4SNkieEAiQ0ix0q2BZUHabmiJ8DuiwWu+5dBowqBLwLTNNsvh4OmfxgbpOEV+D5Ae/5X8BLrnvXKTyaRw3e+84QyY+5n+J8PUIHVCdA+PvjqKbNsN0RogCHJU1SNOJe9XH0KLdNnQesw9wkNcpjxmn+clQUuObnhet+TZNBwecGbJd96WMzIeRPX00I5B8EzVFUOi/8DkJ8VIAJT3kIHeTvmvYKNwc432lyWEEhdoWhAJ+E1S0e1Dx1H/gKmOeIwROZ1/hgRcJAgJQB+ZawzwtsAZ4oBB7N+YyaDIJpDeIUf1MkJ0Z4VP5HmFDKcP4viUWTrmVRH5mZI9x7TxsIUCmIQ92l9YU6NPUijwuPFRKrNBBgkoL/Yd7Q0dqiMx2lZwI/5klwUoQCnKTBtugnR5FEo48QY4ZjQNpnrUGxGq07O4ykZtEskT+N9CXoDMFnJ/u6z75nWX96nEfvVIj+aD4wMYpc/wVhd5UCbJ7djwAAAABJRU5ErkJggg=="
        ],
        "icon_menu": [
                null,
                null,
                null,
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABTAAAAUwBaYa9OQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKGSURBVHic7dtPi41xGMbx70g0s5GFDUVqUnZkZ6MwkrIlzQuwZWcnyo4SibKws5CFELPyEogweQfqFInInxyLp1kqi/u6r87j+ryA+3ee5zudM+f3O8/cdDolfNa5X8D/LgHMEsAsAcwSwCwBzBLALAHMEsAsAcwSwCwBzBLALAHMEsAsAcwSwCwBzBLALAHMEsAsAcwSwCwBzNY3rbMJOABsAzY2rVllCkyAV8Dr6uEdAU4At4DNDWup3QOWgV9VA+fEP03cyfBXs6BcpNl54GLVMPVnwEHGdfMBjlcOUwfYJZ7vUHpN6gDPxfMdXlYOUwd4AnwSr9HtfuUwdYDPwGHgg3idLneB65UD1f8FrdkCnAMOdSwmMAFuAA+B35WDuwLEX2QrwiwBzBLALAHMEsAsAcwSwCwBzBLArONEbAE4zbCPPutHkleA1crhHVsRT4Gj6kWafAP2URhB/RZ0hPHcfIB54FLlQHWAveL5DqXXpA4wa+/3/2K+cpg6wCPxfIeVymHqAC8oPsIz+wJcqxzY8T3gFMOL/tGwltIqcIziHxp0nohtB/Z3LVZsAjxj+E5QKkeSZtmKMEsAswQwSwCzBDBLALMEMEsAs66H9DYAe5jtE7G3wPvq4R0BloDbwI6GtZR+AjeBMxRuSai3IrYyPKQ3hick15wFrlYNU38GLDGumw9wsnKYOsBu8XyH0mtSB3gjnu/wrnKYOsBj4Kt4jW4PKoepA3xk+EHWWCKsAJcrB3YdyCwCF5j9h/TuAN8rB+dEzCxbEWYJYJYAZglglgBmCWCWAGYJYJYAZglglgBmCWCWAGYJYJYAZglglgBmCWCWAGYJYJYAZglglgBmCWD2B4u4XyNfW30oAAAAAElFTkSuQmCC"
        ]
};
    var imageCache = {
        icon_github:null,
        icon_menu:null
    };

    function findRatioImage(array:string[]):NetImage {
        if(array[window.devicePixelRatio]) return new NetImage(array[window.devicePixelRatio], window.devicePixelRatio);
        for(let i=array.length; i>=0; i--){
            if(array[i]){
                return new NetImage(array[i], i);
            }
        }
        throw Error('Not find radio image. May something error in build.')
    }
    export class image_base64{
        static get icon_github(){
            return imageCache.icon_github || (imageCache.icon_github=findRatioImage(data.icon_github));
        }
        static get icon_menu(){
            return imageCache.icon_menu || (imageCache.icon_menu=findRatioImage(data.icon_menu));
        }

    }
}